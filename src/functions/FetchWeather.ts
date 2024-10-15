import { Weather } from "../modules/Weather";
import { BASE_URL } from "../lib/API_KEY";

const API_KEY = import.meta.env.VITE_API_KEY;

export const fetchWeather = async (query: string): Promise<Weather> => {
  const resp = await fetch(
    `${BASE_URL}weather?q=${query}&appid=${API_KEY}&units=metric&lang=de`
  );

  console.log(resp);
  const json = resp.json();
  return json;
};

export const fetchWeatherDetail = async (query: string): Promise<Weather> => {
  const resp = await fetch(
    `${BASE_URL}forecast?q=${query}&appid=${API_KEY}&units=metric&lang=de`
  );

  console.log(resp);
  const json = resp.json();
  return json;
};
