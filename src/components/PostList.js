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
import { authenticate } from "../api/redditAPI";
import axios from "axios";

const PostList = ({searchQuery}) => {
  const dispatch = useDispatch();
  const posts = useSelector(selectRedditPosts);
  const isLoading = useSelector(selectRedditLoading);
  const error = useSelector(selectRedditError);

  

  useEffect(() => {
    dispatch(fetchPostsRequest());

    authenticate()
      .then((accessToken) => {
        axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
        return axios.get('https://www/reddit.com/r/reactjs.json') //to be replaced
      })
      .then((response) => {
        const redditPosts = response.data.data.children.map(
          (post) => post.data
        );
        dispatch(fetchPostsSuccess(redditPosts));
      })
      .catch((error) => {
        dispatch(fetchPostsFailure(error));
      });
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

export default PostList;
