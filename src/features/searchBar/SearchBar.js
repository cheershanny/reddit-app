import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchPosts } from "../postList/postListSlice";
import "../../styles/searchBar.css";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    if (searchQuery.trim() !== '') {
      dispatch(fetchPosts(searchQuery));
    }
  };

  return (
    <div className="search-bar-container">
      <input
        className="search-input"
        type="text"
        placeholder="Search Reddit..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button className="search-button" onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
