import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Error from "./pages/Error";

function App() {
  return (
    <BrowserRouter>
    <nav>navbar</nav>
      <Routes>
        <Route path="*" element={<Error />} />
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="products" element={<Products />} />
        <Route
          path="testing"
          element={
            <div>
              <h2>testing </h2>
            </div>
          }
        />
      </Routes>
      <footer>footer</footer>
    </BrowserRouter>
  );
}

export default App;
