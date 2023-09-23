import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchInput, setSearchInput] = useState("");

  const handleSearch = (searchQuery) => {
    const apiUrl = `https://www.reddit.com/r/${searchQuery}.json`;
    
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search Reddit..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
