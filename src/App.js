import Races from "./data/Races";
import Race from "./components/Race"

function App() {
  const raceList = Races.map(race => {
    return (
      <Race key={race.id} title={race.title} date={race.date} id={race.id} />
    )
  })
  return (
    <div className="mk-champs">
      <header>
        <h1>Mario Kart Champions</h1>
      </header>
      <main>
       {raceList}
      </main>
    </div>
  );
}

export default App;