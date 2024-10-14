import { Main, Weather } from "../modules/Weather"

export default function Main-Weather() {
    return (
        <main>
            <div>
              <h1>{city1} Aktuell</h1>
              <h2>{Weather}</h2>
              <h4>{img}</h4>
              <h3>{Main.temp}</h3>
              <p>{uvi}</p>
            </div>
            <br />
            <div>
            <h1>{city1} Vorschau Morgen</h1>
            <h2>{Weather}</h2>
              <h4>{img}</h4>
              <h3>{Main.temp}</h3>
            </div>
            <div>
            <h1>{city1} Vorschau Übermorgen</h1>
            <h2>{Weather}</h2>
              <h4>{img}</h4>
              <h3>{Main.temp}</h3>
            </div>
            <div>
            <h1>{city1} Vorschau in drei Tagen</h1>
            <h2>{Weather}</h2>
              <h4>{img}</h4>
              <h3>{Main.temp}</h3>
            </div>
            <div>
            <h1>{city1} Vorschau in vier Tagen </h1>
            <h2>{Weather}</h2>
              <h4>{img}</h4>
              <h3>{Main.temp}</h3>
            </div>
            <div>
            <h1>{city1} Vorschau in fünf Tagen </h1>
            <h2>{Weather}</h2>
              <h4>{img}</h4>
              <h3>{Main.temp}</h3>
            </div>
        </main>
    )
}
