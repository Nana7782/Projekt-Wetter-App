import { fetchWeather, fetchWeatherDetail } from "../functions/FetchWeather";
import type { Weather } from "../modules/Weather";

interface HeaderProps {
  setWeather: React.Dispatch<React.SetStateAction<Weather | null>>;
  setWeatherDetail: React.Dispatch<React.SetStateAction<Weather | null>>;
}

export default function Header({ setWeather, setWeatherDetail }: HeaderProps) {
  const handleCity = async (query: string) => {
    const data = await fetchWeather(query);
    const data2 = await fetchWeatherDetail(query);
    setWeatherDetail(data2);
    setWeather(data);
    console.log(data2);
  };

  return (
    <header>
      <div id="Logo-div">
        <img src="../src/img/Blutregen-logo-icon.png" alt="" id="logo-img" />
        <div>
          <h1 id="logo-text">Blutregen!</h1>
          <p id="slogan"> Die beste Wetter-App der Galaxis!</p>
        </div>
      </div>
      <nav>
        <button id="Kiel" onClick={() => handleCity("Kiel")}>
          Kiel
        </button>
        <button id="Duesseldorf" onClick={() => handleCity("Duesseldorf")}>
          Düsseldorf
        </button>
        <button id="Nürnberg" onClick={() => handleCity("Nuernberg")}>
          Nürnberg
        </button>
      </nav>
    </header>
  );
}
