import { IMain, Weather } from "../modules/Weather";

export default function MainWeather() {
  return (
    <main>
      <div>
        <h1>Aktuell</h1>
        <h2>{Weather}</h2>
        <h4>{img}</h4>
        <h3>{Weather.main.temp}</h3>
        <p>{uvi}</p>
      </div>
      <br />
      <div>
        <h1>Wettervorschau Vorschau Morgen</h1>
        <h2>{Weather}</h2>
        <h4>{img}</h4>
        <h3>{Weather.main.temp}</h3>
      </div>
      <div>
        <h1>Wettervorschau Vorschau Übermorgen</h1>
        <h2>{Weather}</h2>
        <h4>{img}</h4>
        <h3>{Weather.main.temp}</h3>
      </div>
      <div>
        <h1>Wettervorschau Vorschau in drei Tagen</h1>
        <h2>{Weather}</h2>
        <h4>{img}</h4>
        <h3>{Weather.main.temp}</h3>
      </div>
      <div>
        <h1>Wettervorschau Vorschau in vier Tagen </h1>
        <h2>{Weather}</h2>
        <h4>{img}</h4>
        <h3>{Weather.main.temp}</h3>
      </div>
      <div>
        <h1>Wettervorschau Vorschau in fünf Tagen </h1>
        <h2>{Weather}</h2>
        <h4>{img}</h4>
        <h3>{Weather.main.temp}</h3>
      </div>
    </main>
  );
}
