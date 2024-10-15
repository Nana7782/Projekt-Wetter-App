export interface WeatherDetails {
  cod: string;
  message: number;
  cnt: number;
  list: List[];
  city: City;
}

interface City {
  id: number;
  name: string;
  coord: Coord;
  country: string;
  population: number;
  timezone: number;
  sunrise: number;
  sunset: number;
}

interface Coord {
  lat: number;
  lon: number;
}

interface List {
  dt: number;
  main: MainClass;
  weather: WeatherElement[];
  clouds: Clouds;
  wind: Wind;
  visibility: number;
  pop: number;
  sys: Sys;
  dt_txt: Date;
  rain?: Rain;
}

interface Clouds {
  all: number;
}

interface MainClass {
  temp: number;
  feelsLike: number;
  tempMin: number;
  tempMax: number;
  pressure: number;
  seaLevel: number;
  grndLevel: number;
  humidity: number;
  tempKf: number;
}

interface Rain {
  the3H: number;
}

interface Sys {
  pod: Pod;
}

enum Pod {
  D = "d",
  N = "n",
}

interface WeatherElement {
  id: number;
  main: MainEnum;
  description: Description;
  icon: Icon;
}
enum Description {
  Bedeckt = "Bedeckt",
  KlarerHimmel = "Klarer Himmel",
  LeichterRegen = "Leichter Regen",
  MäßigBewölkt = "Mäßig bewölkt",
  ÜberwiegendBewölkt = "Überwiegend bewölkt",
}

enum Icon {
  The01D = "01d",
  The03D = "03d",
  The04D = "04d",
  The04N = "04n",
  The10D = "10d",
  The10N = "10n",
}

enum MainEnum {
  Clear = "Clear",
  Clouds = "Clouds",
  Rain = "Rain",
}

interface Wind {
  speed: number;
  deg: number;
  gust: number;
}
