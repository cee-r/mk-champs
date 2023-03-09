function Player(props) {
  let toTitleCase = (str) => {
    return str.toLowerCase().split(' ').map(function (word) {
      return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' ');
  }

  let place = props.place;
  let characterName = toTitleCase(props.portrait);

  return (
    <li className={props.place === 1 ? `player winner ${props.portrait}` : 'player'}>
      <span className="portrait"><img src={'./img/portrait/' + props.portrait + '.png'} alt={characterName} /></span>
      <span className="name">{props.name}</span>
      <span className="place">
        { place === 1 ? (place + 'st') : 
          place === 2 ? (place + 'nd') :
          place === 3 ? (place + 'rd') :
          (place + 'th')
        }
      </span>
    </li>
  );
}

export default Player;