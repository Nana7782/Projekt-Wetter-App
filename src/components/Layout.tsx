import Header from "./Header";
import MainWeather from "./MainWeather";
import type { Weather } from "../types/Weather";
import { useState } from "react";
import { WeatherDetails } from "../types/WeatherDetails";

export default function Layout() {
  const [weather, setWeather] = useState<Weather | null>(null);
  const [weatherDetail, setWeatherDetail] = useState<WeatherDetails | null>(
    null
  );

  return (
    <div>
      <h1>Weather</h1>
      <Header setWeather={setWeather} setWeatherDetail={setWeatherDetail} />
      <MainWeather weather={weather} weatherDetail={weatherDetail} />
    </div>
  );
}
