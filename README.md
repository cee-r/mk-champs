# Mario Kart Champs

## Update

- Update Data
  - `src/data/Races.js`
  - `src/data/Players.js`
- Commit and Push Changes to git
- Deploy
  - `npm deploy`

## Data

### Races 
`src/data/Races.js`

- **ID** (Number)
  - Unique ID
- **Date**
  - Date of the race. Format: `YYYY-MM-DD`
  - Needs a date to show results
- **Title**
  - Title of the race.
- **Description**
  - Descriptions / Rules?
  - Not displayed currently
- **Colors**
  - Colors based on winner's character
  

| Color      | Input        | Characters                                                                                               |
| ---------- | ------------ | -------------------------------------------------------------------------------------------------------- |
| Red        | `red`        | Mario, Baby Mario, Toad, Shy Guy, Village (Male), Yoshi (Red), Birdo (Red)                               |
| Green      | `green`      | Luigi, Baby Luigi, Yoshi, Bowser, Bowser Jr., Link, Iggy, Shy Guy (Green)                                |
| Lime       | `lime`       | Isabelle, Birdo (Green), Inkling (Green)                                                                 |
| Blue       | `blue`       | Ludwig, Inkling (Male), Yoshi (Blue), Shy Guy (Blue), Birdo (Blue)                                       |
| Light Blue | `light-blue` | Lemmy, Larry, Mii, Link (BOTW), Yoshi (Light Blue), Shy Guy (Light Blue), Birdo (Light Blue)             |
| Teal       | `teal`       | Rosalina, Baby Rosalina, Inkling (Teal)                                                                  |
| Yellow     | `yellow`     | Koopa Troopa, Lakitu, Wario, Donkey Kong, Mario (Gold), Yoshi (Yellow), Shy Guy (Yellow), Birdo (Yellow) |
| Orange     | `orange`     | Daisy, Baby Daisy, Mario (Tanooki), Inkling (Female), Yoshi (Orange), Shy Guy (Orange), Birdo (Orange)   |
| Pink       | `pink`       | Peach, Baby Peach, Peach (Cat), Peach (Pink Gold), Villager (Female), Yoshi (Pink), Shy Guy (Pink)       |
| Magenta    | `magenta`    | Birdo, Roy, Wendy, Toadette, Inkling (Magenta)                                                           |
| Purple     | `purple`     | Waluigi, Inkling (Purple)                                                                                |
| Black      | `black`      | Dry Bones,  Dry Bowser, Morton, Mario (Metal), Yoshi (Black), Shy Guy (Black), Birdo (Black)             |
| White      | `white`      | King Boo, Yoshi (White), Shy Guy (White), Birdo (White)                                                  |


### Players
`src/data/Players.js`

- **ID** (Number)
  - Unique ID
- **Race** (Number)
  - ID of the race
- **Finish** (Number)
  - Place finish. 1-12
- **Name**
  - Name of player
- **Character**
  - Character used in the final race

| Character            | Input                |
| -------------------- | -------------------- |
| Baby Daisy           | `baby-daisy`         |
| Baby Luigi           | `baby-luigi`         |
| Baby Mario           | `baby-mario`         |
| Baby Peach           | `baby-peach`         |
| Baby Rosalina        | `baby-rosalina`      |
| Birdo                | `birdo`              |
| Birdo (Black)        | `birdo-black`        |
| Birdo (Blue)         | `birdo-blue`         |
| Birdo (Green)        | `birdo-green`        |
| Birdo (Light Blue)   | `birdo-light-blue`   |
| Birdo (Orange)       | `birdo-orange`       |
| Birdo (Red)          | `birdo-red`          |
| Birdo (White)        | `birdo-white`        |
| Birdo (Yellow)       | `birdo-yellow`       |
| Bowser               | `bowser`             |
| Bowser Jr.           | `bowser-jr`          |
| Daisy                | `daisy`              |
| Donkey Kong          | `donkey-kong`        |
| Dry Bones            | `dry-bones`          |
| Dry Bowser           | `dry-bowser`         |
| Iggy                 | `iggy`               |
| Inkling (Female)     | `inkling-female`     |
| Inkling (Lime)       | `inkling-lime`       |
| Inkling (Magenta)    | `inkling-magenta`    |
| Inkling (Male)       | `inkling-male`       |
| Inkling (Purple)     | `inkling-purple`     |
| Inkling (Teal)       | `inkling-teal`       |
| Isabelle             | `isabelle`           |
| King Boo             | `king-boo`           |
| Koopa Troopa         | `koopa-troopa`       |
| Lakitu               | `lakitu`             |
| Larry                | `larry`              |
| Lemmy                | `lemmy`              |
| Link                 | `link`               |
| Link (BOTW)          | `link-botw`          |
| Ludwig               | `ludwig`             |
| Luigi                | `luigi`              |
| Mario                | `mario`              |
| Mario (Gold)         | `mario-gold`         |
| mario (Metal)        | `mario-metal`        |
| Mario (Tanooki)      | `mario-tanooki`      |
| Mii                  | `mii`                |
| Morton               | `morton`             |
| Peach                | `peach`              |
| Peach (Cat)          | `peach-cat`          |
| Peach (Gold Pink)    | `peach-gold-pink`    |
| Rosalina             | `rosalina`           |
| Roy                  | `roy`                |
| Shy Guy              | `shy-guy`            |
| Shy Guy (Black)      | `shy-guy-black`      |
| Shy Guy (Blue)       | `shy-guy-blue`       |
| Shy Guy (Green)      | `shy-guy-green`      |
| Shy Guy (Light Blue) | `shy-guy-light-blue` |
| Shy Guy (Orange)     | `shy-guy-orange`     |
| Shy Guy (Pink)       | `shy-guy-pink`       |
| Shy Guy (White)      | `shy-guy-white`      |
| Shy Guy (Yellow)     | `shy-guy-yellow`     |
| Toad                 | `toad`               |
| Toadette             | `toadette`           |
| Villager (Female)    | `villager-female`    |
| Villager (Male)      | `villager-male`      |
| Waluigi              | `waluigi`            |
| Wario                | `wario`              |
| Wendy                | `wendy`              |
| Yoshi                | `yoshi`              |
| Yoshi (Black)        | `yoshi-black`        |
| Yoshi (Blue)         | `yoshi-blue`         |
| Yoshi (Light Blue)   | `yoshi-light-blue`   |
| Yoshi (Orange)       | `yoshi-orange`       |
| Yoshi (Pink)         | `yoshi-pink`         |
| Yoshi (Red)          | `yoshi-red`          |
| Yoshi (White)        | `yoshi-white`        |
| Yoshi (Yellow)       | `yoshi-yellow`       |

