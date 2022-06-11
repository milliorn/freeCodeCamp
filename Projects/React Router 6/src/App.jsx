import About from "./pages/About";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Products from "./pages/Products";
import SharedLayout from "./pages/SharedLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SingleProduct from "./pages/SingleProduct";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="*" element={<Error />} />
          <Route path="about" element={<About />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:productId" element={<SingleProduct />} />
        </Route>
        <Route
          path="testing"
          element={
            <div>
              <h2>testing </h2>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
