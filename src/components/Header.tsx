import {
  handleCity1,
  handleCity2,
  handleCity3,
} from "../functions/handleButtons";

export default function Header() {
  return (
    <header>
      <nav>
        <button id="City1" onClick={handleCity1}>
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
