import { Weather } from "../modules/Weather";
import { BASE_URL } from "../lib/API_KEY";

const API_KEY = import.meta.env.VITE_API_KEY;

export const fetchWeather = async (
  lat: number,
  lon: number
): Promise<Weather> => {
  const resp = await fetch(
    `${BASE_URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}`
  );

  console.log(resp);
  const json = resp.json();
  return json;
};
