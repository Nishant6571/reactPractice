import React, { useEffect, useState, useMemo } from "react";
import Card from "./Card";

const Posts = () => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const postData = await response.json();
        console.log(postData);
        setData(postData);
      } catch (err) {
        setError(err.message);
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  const handleDelete = (postId) => {
    const updatedData = data.filter((post) => post.id !== postId);
    setData(updatedData);
  };

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error: {isError}</p>}
      <div>
        Posts
        {data.map((post) => (
          <Card key={post.id} post={post} onDelete={handleDelete} />
        ))}
      </div>
    </>
  );
};

export default Posts;
