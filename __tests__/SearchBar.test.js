import {
  render,
  screen,
  fireEvent
} from "@testing-library/react";
import SearchBar from "../src/features/searchBar/SearchBar";
import React from "react";
import { Provider } from "react-redux";
import store from "../src/store";
import '@testing-library/jest-dom/extend-expect'; 

test("renders without crashing", () => {
  render(<Provider store={store}><SearchBar /> </Provider>);
  const searchButtonElement = screen.getByLabelText("Search");
  expect(searchButtonElement).toBeInTheDocument();
});

test("handles input change", () => {
  render(<Provider store={store}><SearchBar /> </Provider>);
  const inputElement = screen.getByPlaceholderText("Search Reddit...");
  fireEvent.change(inputElement, { target: { value: "test" } });
  expect(inputElement.value).toBe('test');
});
