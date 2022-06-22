import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const client = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/posts",
  });

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
