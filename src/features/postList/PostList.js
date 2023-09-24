import React from "react";
import { useSelector } from "react-redux";
const PostList = () => {
  const posts = useSelector((state) => {
    console.log(state);
    return state.postList.posts;
  });
  const isLoading = useSelector((state) => state.postList.isLoading);
  const error = useSelector((state) => state.postList.error);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
        </div>
      ))}
    </div>
  );
};

export default PostList;
