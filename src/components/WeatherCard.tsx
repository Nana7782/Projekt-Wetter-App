import { WeatherDetails } from "../types/WeatherDetails";

interface WeatherCardProps {
  weatherDetail: WeatherDetails;
}

export default function WeatherCard({ weatherDetail }: WeatherCardProps) {
  return (
    <div className="weatherDetail">
      {weatherDetail.list.map((weather) => {
        const dateObject = new Date(weather.dt_txt);
        const formattedDate = dateObject.toLocaleString();
        return (
          <div key={weather.dt} className="singleWeather">
            <p>{formattedDate}</p>
            <img src={`/weather-img/${weather.weather[0].icon}.png`} />
            <h2>{weather.main.temp}°C</h2>
            <p>{weather.weather[0].description}</p>
          </div>
        );
      })}
    </div>
  );
}
