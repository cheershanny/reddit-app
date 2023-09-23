import "./styles/App.css";
import PostList from "./components/PostList";
import SearchBar from "./components/SearchBar";

function App() {
  const handleSearch = () => {}; //ATTENTION: implement handleSearch func

  return (
    <div className="App">
      <header className="App-header">
        <h1>Redditiana App</h1>
        <SearchBar onSearch={handleSearch}/>
      </header>
      <main>
        <PostList />
      </main>
    </div>
  );
}

export default App;
