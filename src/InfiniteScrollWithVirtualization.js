import React from 'react'
import {FixedSizeList as List} from 'react-window';
const ITEM_SIZE = 50;
const TOTAL_ITEMS = 1000;

function fetchItems(start, count=20){
    console.log('start', start)
    return new Promise((resolve)=> {
        setTimeout(()=> {
          resolve(Array.from({length: count}, (ele,i)=> `Item no ${start+i+1}`))
        }, 1000)
    })
}

function InfiniteScrollWithVirtualization() {
    const [items, setItems] = React.useState([])
    const [hasMore, setHasMore] = React.useState(true)
    const [loading, setLoading] = React.useState(false)
     const ref = React.useRef(null)
    
    const loadMoreItems = () => {
        if(!hasMore || loading){
        return ;
        }
        if(!ref.current){
        setLoading(true);
        ref.current = true
        fetchItems(items.length).then((newItems)=> {
            ref.current = false;
            setItems(prev=> [...prev,...newItems ])
            setLoading(false);
            if(items.length + newItems.length>=TOTAL_ITEMS){
                setHasMore(false)
            }
        })
    }
    }


    const Row = ({ index , style}) => {
        if (index === items.length) {
          loadMoreItems();
          return <div style={style}>Loading...</div>;
        }
    
        return <div style={style}>{items[index]}</div>;
      };
  return (
     <List
      height={400}
      itemSize={ITEM_SIZE}
      itemCount={hasMore? items.length+1: items.length}
      width={'100%'}
     >
     {Row}
     </List>
  )
}

export default InfiniteScrollWithVirtualization
