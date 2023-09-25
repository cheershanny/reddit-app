import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import PostList from "../src/features/postList/PostList";
import "@testing-library/jest-dom/extend-expect";

const mockStore = configureStore([]);

test("renders loading message when isLoading is true", () => {
  const store = mockStore({
    postList: {
      isLoading: true,
      error: null,
      posts: [],
    },
  });

  render(
    <Provider store={store}>
      <PostList />
    </Provider>
  );

  const loadingElement = screen.getByText("Loading...");
  expect(loadingElement).toBeInTheDocument();
});

test("renders error message when error is present", () => {
  const store = mockStore({
    postList: {
      isLoading: false,
      error: "Some error message",
      posts: [],
    },
  });

  render(
    <Provider store={store}>
      <PostList />
    </Provider>
  );

  const errorElement = screen.getByText("Error: Some error message");
  expect(errorElement).toBeInTheDocument();
});

test("renders posts when isLoading is false and error is null", () => {
  const store = mockStore({
    postList: {
      isLoading: false,
      error: null,
      posts: [
        { id: 1, title: "Post 1" },
        { id: 2, title: "Post 2" },
      ],
    },
  });

  render(
    <Provider store={store}>
      <PostList />
    </Provider>
  );

  const post1Element = screen.getByText("Post 1");
  const post2Element = screen.getByText("Post 2");

  expect(post1Element).toBeInTheDocument();
  expect(post2Element).toBeInTheDocument();
});
