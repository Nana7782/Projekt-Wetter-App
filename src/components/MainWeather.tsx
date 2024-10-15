<<<<<<< HEAD
import { Weather } from "../modules/Weather";
=======
import { IMain, Weather } from "../modules/Weather";
import WeatherCard from "./WeatherCard";
>>>>>>> main

interface CityProps {
  weather: Weather | null;
  weatherDetail: Weather | null;
}

export default function MainWeather({ weather }: CityProps) {
  // const weather = props.weather
  //const {weather} = props //& destructuring
  if (!weather) {
    return <div className="chooseCity">Bitte wähle deine Stadt aus</div>;
  }
  console.log(weather.name);
  return (
    <main>
<<<<<<< HEAD
      <h1>{weather.name}</h1>
      <h2>{weather.}</h2>
      <h3>{weather.main.temp}</h3>
      <img
        src={`../src/assets/img/${weather.weather.map((w) => w.icon)}.png`}
        alt={`${weather.weather.map((w) => w.icon)}`}
      />
      <img>{weather.weather.map((w) => w.icon)}</img>
=======
      <div className="weatherNow">
        <h1>{weather.name}</h1>
        <img
          src={`../src/img/${weather.weather[0].icon}.png`}
          alt="weathericon"
        />
        <h2>{weather.weather[0].description}</h2>
        <h3>{weather.main.temp}°C</h3>
      </div>
      <div className="weatherCard">{/* <WeatherCard /> */}</div>
>>>>>>> main
    </main>
  );
}
