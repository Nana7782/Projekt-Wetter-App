import { mockComponent } from "react-dom/test-utils";
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
          <div key={weather.dt}>
            <p>{formattedDate}</p>
            <h2>{weather.main.temp}</h2>
            <p>{weather.weather[0].description}</p>
          </div>
        );
      })}
    </div>
  );
}
