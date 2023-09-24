import React from "react"; 
import "./styles/App.css";
import PostList from "./features/postList/PostList";
import SearchBar from "./features/searchBar/SearchBar";

function App() {
  

  return (
    <div className="App">
      <header className="App-header">
        <h1>Redditiana App</h1>
        <SearchBar /> 
      </header>
      <main>
        <PostList />
      </main>
    </div>
  );
}

export default App;
