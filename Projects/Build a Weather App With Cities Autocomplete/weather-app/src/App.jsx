import "./App.css";
import Search from "./components/Search";
import CurrentWeather from "./components/CurrentWeather";

function App() {
  const handleOnSearchChange = (searchData) => {
    console.warn(searchData);
  };

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />
      <CurrentWeather />
    </div>
  );
}

export default App;
