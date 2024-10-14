import {
  handleCity1,
  handleCity2,
  handleCity3,
} from "../functions/handleButtons";
import type { Weather } from "../modules/Weather";

interface HeaderProps {
  setWeather: React.Dispatch<React.SetStateAction<Weather | null>>;
}

export default function Header({ setWeather }: HeaderProps) {

  const handleCity = (lat,lon)=>{
    const data = await fetchWeather(lat, lon)
    setWeather(data)
  }

  return (
    <header>
      <nav>
        <button id="City1" onClick={()=>handleCity(123,23))}>
          Düsseldorf
        </button>
        <button id="City2" onClick={handleCity2}>
          Hamburg
        </button>
        <button id="City3" onClick={handleCity3}>
          Nürnberg
        </button>
      </nav>
    </header>
  );
}
