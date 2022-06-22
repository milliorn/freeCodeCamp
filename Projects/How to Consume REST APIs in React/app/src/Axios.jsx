import "./App.css";
import axios from "axios";
import logo from "./logo.svg";
import { useState, useEffect } from "react";

function App() {
  /* create state to store data */
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  /* Create an instance */
  const client = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/posts",
  });

  /* GET request */
  useEffect(() => {
    client.get("?_limit=10").then((response) => {
      setPosts(response.data);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="add-post-container">
          {posts.map((post) => {
            return (
              <div className="post-card" key={post.id}>
                <div className="button">
                  <div
                    className="delete-btn"
                    onClick={() => deletePost(post.id)}
                  >
                    <span>userId: </span>
                    {post.userId}
                    <br />
                    <span>id: </span>
                    {post.id}
                    <br />
                    <span>title: </span>
                    {post.title}
                    <br />
                    <span>body: </span>
                    {post.body}
                    <br />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </header>
    </div>
  );
}

export default App;
