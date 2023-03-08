import Players from "../data/Players"
import Player from "./Player"

function Race(props) {

  const filterByRace = Players.filter(player => player.race === props.id);

  const playerList = filterByRace.map(player => {
    return (
      <Player key={player.id} name={player.name} portrait={player.character} place={player.finish} race={player.race} />
    )
  })

  return (
    <div className="list">
        {props.date === 'N/A' ? 'no race' : (
          <div className="item">
            <div className="race">
              <h2>{props.title}</h2>
              <span className="date">{props.date}</span>
            </div>
            <ul className={`players ${props.colors}`}>
              {playerList}
            </ul>
          </div>
        )}
    </div>
  );
}

export default Race;