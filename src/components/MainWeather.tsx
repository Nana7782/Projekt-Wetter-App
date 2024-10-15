import { Weather } from "../types/Weather";
import { WeatherDetails } from "../types/WeatherDetails";
import WeatherCard from "./WeatherCard";

interface CityProps {
  weather: Weather | null;
  weatherDetail: WeatherDetails | null;
}

export default function MainWeather({ weather, weatherDetail }: CityProps) {
  // const weather = props.weather
  //const {weather} = props //& destructuring
  if (!weather) {
    return <div>Bitte wähle deine Stadt aus</div>;
  }
  console.log(weather.name);
  return (
    <main>
      <div className="weatherNow">
        <h1>{weather.name}</h1>
        <img
          src={`../src/img/${weather.weather[0].icon}.png`}
          alt="weathericon"
        />
        <h2>{weather.weather[0].description}</h2>
        <h3>{weather.main.temp}°C</h3>
      </div>
      <div className="weatherDetail">
        {weatherDetail && <WeatherCard weatherDetail={weatherDetail} />}
      </div>
    </main>
  );
}
