import Header from "./Header";
import MainWeather from "./MainWeather";
import type { Weather } from "../modules/Weather";
import { useState } from "react";

export default function Layout() {
  const [weather, setWeather] = useState<Weather | null>(null);

  return (
    <div>
      <h1>Weather</h1>
      <Header setWeather={setWeather} />
      <MainWeather weather={weather} />
    </div>
  );
}
