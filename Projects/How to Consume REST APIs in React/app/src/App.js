import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  /* create state to store data */
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

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

  /* POST method to send data from an endpoint. */
  const addPosts = async (title, body) => {
    await fetch(endpoint, {
      method: "POST",
      body: JSON.stringify({
        /*The body holds the data we want to pass into the API,
        which we must first stringify because we are sending data to a web server */
        title: title,
        body: body,
        userId: Math.random().toString(36).slice(2),
      }),
      headers: {
        /*The header tells us the type of data, which is always the same when consuming REST API's. */
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        /* Set the state to hold the new data and distribute the remaining data into the array. */
        setPosts((posts) => [data, ...posts]);
        setTitle("");
        setBody("");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addPosts(title, body);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="add-post-container">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className="form-control"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
              name=""
              className="form-control"
              id=""
              cols="1"
              rows="1"
              value={body}
              onChange={(e) => setBody(e.target.value)}
            ></textarea>
            <button type="submit">Add Post</button>
          </form>{" "}
        </div>
      </header>
    </div>
  );
}

export default App;
