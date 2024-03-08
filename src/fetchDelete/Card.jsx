import React from "react";

const Card = ({ post, onDelete }) => {
  const handleDelete = () => {
    onDelete(post.id);
  };

  return (
    <div>
      <h3>Card</h3>
      <p>Post ID: {post.id}</p>
      <p>Title: {post.title}</p>
      <p>Body: {post.body}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default Card;
