import { useState, useEffect, useRef } from "react";

const fetchData = async (page) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`);
  return res.json();
};

export default function InfiniteScroll() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const observerRef = useRef();

  useEffect(() => {
    const loadMore = async () => {
      if (!hasMore) return;

      setLoading(true);
      const newData = await fetchData(page);
      setData((prev) => [...prev, ...newData]);

      if (newData.length === 0) setHasMore(false); // Stop fetching if no data
      setLoading(false);
    };

    loadMore();
  }, [page]);

  useEffect(() => {
    if (loading) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setPage((prev) => prev + 1);
      },
      { threshold: 1 }
    );

    if (observerRef.current) observer.observe(observerRef.current);
    return () => observer.disconnect();
  }, [loading]);

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
      <h2>Infinite Scroll</h2>
      {data.map((item) => (
        <div key={item.id} style={{ border: "1px solid #ccc", padding: "10px", margin: "10px 0" }}>
          <h4>{item.title}</h4>
          <p>{item.body}</p>
        </div>
      ))}
      {loading && <p>Loading...</p>}
      <div ref={observerRef} style={{ height: "20px" }} />
    </div>
  );
}
