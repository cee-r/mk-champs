import Players from "../data/Players"
import Placeholder from "./Placeholder";
import Player from "./Player"

function Race(props) {

  const filterByRace = Players.filter(player => player.race === props.id);

  const playerList = filterByRace.map(player => {
    return (
      <Player key={player.id} name={player.name} portrait={player.character} place={player.finish} race={player.race} />
    )
  })

  // Final 4 Placeholder
  const placeholderList = [];
  for (let i = 0; i < 4; i++) {
    placeholderList.push(<Placeholder key={i} />);
  }

  return (
    <div className={`list ${props.colors}`}>
      <div className="item">
        <div className="race">
          <h2>{props.title}</h2>
          <span className="date">{props.date}</span>
        </div>
        {props.date === 'N/A' ? (
          <ul className="players">
            { placeholderList}
          </ul>
        ) : (
          <ul className="players">
            {playerList}
          </ul> 
        )}
        
      </div>
    </div>
  );
}

export default Race;