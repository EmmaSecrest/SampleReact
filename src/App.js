import { Component, useEffect, useState } from "react";
import "./App.css";
import Post from "./Post";

class Comment extends Component {
  render() {
    return (
      <div>
        <p>{this.props.body}</p>
      </div>
    );
  }
}

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  async function fetchpost(id) {
    const post = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    return post.json();
  }

  useEffect(() => {
    (async () => {
      const post = await fetchpost(searchTerm);
      console.log(post);
    })();
  }, [searchTerm]);

  function handleSearch(event) {
    event.preventDefault();
    setSearchTerm(searchTerm);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Search</h1>
        <form onSubmit={handleSearch}>
          <input
            type="text"
            onChange={(event) => setSearchTerm(event.currentTarget.value)}
          />
          <button>Search</button>
        </form>
        <Post />
        {/* <Post title="My Blog Post" body="The blog body" userId={1} postId={1} /> */}
        <Comment body="comment body" />
      </header>
    </div>
  );
}

export default App;
