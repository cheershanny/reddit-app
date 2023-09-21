import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchPostsRequest,
  fetchPostsSuccess,
  fetchPostsFailure,
  selectRedditPosts,
  selectRedditLoading,
  selectRedditError,
} from "../features/Reddit/redditSlice";

export default PostList = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectRedditPosts);
  const isLoading = useSelector(selectRedditLoading);
  const error = useSelector(selectRedditError);

  useEffect(() => {
    dispatch(fetchPostsRequest());

    //ATTENTION: add API call using Axios
    setTimeout(() => {
      try {
        const APIdata = []; //ATTENTION: add API logic
        dispatch(fetchPostsSuccess(APIdata));
      } catch (error) {
        //ATTENTION: add error handling logic
        dispatch(fetchPostsFailure(error));
      }
    }, 2000);
  }, [dispatch]);

  return (
    <div>
      <h1>Reddit Posts</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};
