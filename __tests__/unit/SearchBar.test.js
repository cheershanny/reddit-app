import {
  render,
  screen,
  fireEvent,
  getByPlaceholderText,
} from "@testing-library/react";
import SearchBar from "../../src/features/searchBar/SearchBar";
import React from "react";

test("renders without crashing", () => {
  render(<SearchBar />);
  const searchButtonElement = screen.getByText(/Search/i);
  expect(searchButtonElement).toBeInTheDocument();
});

test("handles input change", () => {
  render(<SearchBar />);
  const inputElement = screen.getByPlaceholderText("Search Reddit...");
  fireEvent.change(inputElement, { target: { value: "test" } });
  expect(inputElement.value).toBe('test');
});

test("loads items eventually", async () => {
  render(<SearchBar />);
  fireEvent.click(screen.getByText("Load"));
  const items = await screen.findAllByText(/Item #[0-9]: /);
  expect(items).toHaveLength(10);
});
