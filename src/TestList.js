import React, { useState, useEffect, useCallback, useRef } from "react";
import { FixedSizeList as List } from "react-window";

const ITEM_HEIGHT = 50;
const TOTAL_ITEMS = 1000; // Simulating a large dataset

const fetchMoreItems = (startIndex, count = 20) => {
  console.log('startIndex', startIndex)
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        Array.from({ length: count }, (_, i) => `Item ${startIndex + i + 1}`)
      );
    }, 1000);
  });
};

export default function TestList() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const ref = useRef(null)

  // useEffect(() => {
  //   fetchMoreItems(0).then((newItems) => {
  //     console.log('items', newItems)
  //     setItems(newItems)
  // });
    
  // }, []);

  const loadMoreItems = () => {
    if (loading || !hasMore) return;
    if(!ref.current){
    setLoading(true);
    ref.current = true;
    fetchMoreItems(items.length).then((newItems) => {
      console.log('outer', newItems)
      ref.current = false;
      setItems((prevItems) => [...prevItems, ...newItems]);
      setLoading(false);
      if (items.length + newItems.length >= TOTAL_ITEMS) setHasMore(false);
    });
  }
  };

  const Row = ({ index, style }) => {
    if (index === items.length) {
      loadMoreItems();
      return <div style={style}>Loading...</div>;
    }

    return <div style={style} className="p-2 border">{items[index]}</div>;
  };

  return (
    <List
      height={400}
      itemCount={hasMore ? items.length + 1 : items.length}
      itemSize={ITEM_HEIGHT}
      width={"100%"}
    >
      {Row}
    </List>
  );
}
