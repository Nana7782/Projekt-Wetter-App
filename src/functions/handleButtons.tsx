import { fetchWeather } from "./FetchWeather";

export function handleCity1() {
  const fetchDuesseldorf = fetchWeather(51.2165, 6.7836);
  console.log(fetchDuesseldorf);

  return;
}

export function handleCity2() {
  const fetchHamburg = fetchWeather(53.550341, 10.000654);
  console.log(fetchHamburg);
}

export function handleCity3() {
  const fetchNuernberg = fetchWeather(49.453872, 11.077298);
  console.log(fetchNuernberg);
}
