import { fetchWeather } from "../functions/FetchWeather";
import type { Weather } from "../modules/Weather";

interface HeaderProps {
  setWeather: React.Dispatch<React.SetStateAction<Weather | null>>;
}

export default function Header({ setWeather }: HeaderProps) {
  const handleCity = async (lat: number, lon: number) => {
    const data = await fetchWeather(lat, lon);
    return setWeather(data);
  };

  return (
    <header>
      <nav>
        <button id="City1" onClick={() => handleCity(51.2165, 6.7836)}>
          Düsseldorf
        </button>
        <button id="City2" onClick={() => handleCity(53.550341, 10.000654)}>
          Hamburg
        </button>
        <button id="City3" onClick={() => handleCity(49.453872, 11.077298)}>
          Nürnberg
        </button>
      </nav>
    </header>
  );
}
