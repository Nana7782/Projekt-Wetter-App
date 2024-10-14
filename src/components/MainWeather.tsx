import { IMain, Weather } from "../modules/Weather";

interface CityProps {
  weather: Weather | null;
}

export default function MainWeather({ weather }: CityProps) {
  // const weather = props.weather
  //const {weather} = props //& destructuring
  if (!weather) {
    return <div>Bitte wähle deine Stadt aus</div>;
  }
  return (
    <main>
      <h1>{weather.name}</h1>
      <h2>{weather.clouds.all}</h2>
      <h3>{weather.main.temp}</h3>
    </main>
  );
}
