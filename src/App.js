import './App.css';
import Weather from './Components/Weather';
import WeatherState from './Contexts/WeatherState';
import SearchBar from "./Components/SearchBar"

function App() {
  return (
    <div className='appContainer'>
    <WeatherState>
      <SearchBar/>
      <Weather/>
    </WeatherState>
    </div>
  );
}

export default App;
