import "./App.css";
import Search from "./components/Search";

function App() {
  const handleOnSearchChange = (searchData) => {
    console.warn(searchData);
  };

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />
    </div>
  );
}

export default App;
