import { useEffect, useState, useRef } from "react";

const IntersectionObserverFile = () => {
    const [items, setItems] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const loaderRef = useRef(null);

    // Fetch Data
    const fetchData = async () => {
        setLoading(true);
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`);
        const data = await res.json();
        setItems((prev) => [...prev, ...data]);
        setLoading(false);
    };

    useEffect(()=> {
        if(loading){
            return;
        }
    const observer = new IntersectionObserver((entries)=> {
        if(entries[0].isIntersecting){
            setPage((page)=> page+1)
        }
    }, {
        threshold:1
    })
    if(loaderRef.current){
        observer.observe(loaderRef.current)
    }
    return ()=> {
        observer?.disconnect();
    }

    },[loading])

 

    // Fetch data whenever page changes
    useEffect(() => {
        fetchData();
    }, [page]);

    return (
        <div>
            <h2>Infinite Scroll Example</h2>
            <ul>
                {items.map((item) => (
                    <li key={item.id}>{item.title}</li>
                ))}
            </ul>
            <div ref={loaderRef} style={{ height: 50, background: "lightgray" }}>
                {loading && <p>Loading more...</p>}
            </div>
        </div>
    );
};

export default IntersectionObserverFile;

// https://codesandbox.io/p/sandbox/thoghtspot-cqsm2p?file=%2Fsrc%2FBarGraph.js%3A1%2C1-51%2C1