import Header from "./Header";
import MainWeather from "./MainWeather";
import type { Weather } from "../modules/Weather";
import { useState } from "react";

export default function Layout() {
  const [weather, setWeather] = useState<Weather | null>(null);
  const [weatherDetail, setWeatherDetail] = useState<Weather | null>(null);

  return (
    <div>
      <Header setWeather={setWeather} setWeatherDetail={setWeatherDetail} />
      <MainWeather weather={weather} weatherDetail={weatherDetail} />
    </div>
  );
}
