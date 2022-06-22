import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  /* create state to store data */
  const [posts, setPosts] = useState([]);

  const endpoint = "https://jsonplaceholder.typicode.com/posts?_limit=10";

  /* GET request with Fetch api */
  useEffect(() => {
    fetch(endpoint) /* The fetch request yields a promise*/
      .then((response) => response.json()) /* Convert data to json */
      .then((data) => {
        /* Resolve promise */
        console.log(data);
        setPosts(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
