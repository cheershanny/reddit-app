import React from "react";
import { useSelector } from "react-redux";
const PostList = () => {
  const posts = useSelector((state) => state.postList.posts);
  const isLoading = useSelector((state) => state.postList.isLoading);
  const error = useSelector((state) => state.postList.error);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <ul role='list'>
      {posts.map((post) => (
        <li key={post.id} role="listitem">
          <h2>{post.title}</h2>
        </li>
      ))}
    </ul>
  );
};

export default PostList;
