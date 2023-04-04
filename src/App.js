import './App.css';
import Location from './Components/Location';
import Weather from './Components/Weather';
import WeatherState from './Contexts/WeatherState';
import SearchBar from "./Components/SearchBar"

function App() {
  return (
    <>
    <WeatherState>
      <SearchBar/>
      <Weather/>
    </WeatherState>
    </>
  );
}

export default App;
