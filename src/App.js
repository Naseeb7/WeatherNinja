import './App.css';
import Background from './Components/Background';
import Location from './Components/Location';
import Weather from './Components/Weather';
import WeatherState from './Contexts/WeatherState';
import SearchBar from "./Components/SearchBar"

function App() {
  return (
    <>
    <WeatherState>
      <Background/>
      <SearchBar/>
      <Weather/>
    </WeatherState>
    </>
  );
}

export default App;
