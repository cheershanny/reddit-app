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
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          {post.title}
        </li>
      ))}
    </ul>
  );
};

export default PostList;
