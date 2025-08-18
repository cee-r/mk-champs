# Mario Kart Champs

- [Project](#project)
  - [FE Stack](#fe-stack)
  - [Content Update](#content-update)
    - [Deploying](#deploying)
    - [Scaffolding](#scaffolding)
    - [Example content](#example-content)
- [Reference](#reference)
  - [Characters](#characters)
  - [Colours](#colours)


## Project

### FE Stack

[Dice roll on a pretty jank combo](https://slotmaker.net/game/caf30461-812f-40d4-8dd5-4d15418a580b) but fuck it we ball... 😭

- Hugo 
- Tailwind 🤮
- Atomic design methodology



### Content Update

Locally:

- Build project with `npm` and `hugo`
- `hugo new <race-name>.md` creates a new race file in the content directory based on the archetype
- Update fields with new info

Directly on GitHub Repo:

- Copy and paste existing content `.md` file to create a new one with new info

#### Deploying

Automatically builds and deploys to githubpages on push to `2.x` branch.

#### Scaffolding

```
root
├── content
|   └── race.md  
├── static
|   ├── images
|   └── reels
```

- Content goes in the content directory.
  - It contains `<race-name>.md` files following the content format below
- Resouces (images, videos, etc) goes in the static folder
  - Race specific hero area resources can be placed in `reels` directory

#### Example content

```
+++
draft = false

# Race
date = 2024-02-23T16:48:14-04:00
title = "Race V"
description = "Free For All: 4 Heats / 4 Random Tracks / 150CC / Final 4 Choose Tracks"
game = "mk8dx"
mode = ["vs", "150CC"]
reel = "reels/highlight-reel-v.mp4"

# Result
[[players]]
name = "Player 1"
position = 1
character = "mario"
combo = ["Standard", "Standard", "Standard"]

[[players]]
name = "Player 2"
position = 2
character = "luigi"
combo = ["Standard", "Standard", "Standard"]

[[players]]
name = "Player 3"
position = 3
character = "toad"
combo = ["Standard", "Standard", "Standard"]

[[players]]
name = "Player 4"
position = 4
character = "yoshi"
combo = ["Standard", "Standard", "Standard"]
+++

```

- `draft` : boolean
  - Specifies if content is in draft mode
  - `false` by default
- `date` : datetime
  - Date of the race
- `title` : string
  - Title of the race
- `description` : string
  - Ruleset or information of the competition
- `mode` : array
  - Mode of the races (vs, gp, ko, 200cc, etc)
    - `vs`: VS Race
    - `gp`: Grand Prix
    - `ko`: Knock Out Tour
    - `ba`: Battle
    - `150CC`: Number CC 
- `game` : string
  - Abbreviated version of the Mario Kart game played (mk8dx, mkw, etc)
  - Pathing for game specfic assets rely on this
- `reel` : string
  - Media displayed in the feature area
  - Takes mp4 or images
  - If empty, the area displays a color block based on winning character
- `players` : nested array
  -`name` : string
    - Name of player (Firstname L.)
  - `placement` : number
    - Placement of player
  - `character` : string
    - Character the player used ([refer to the list](#characters))
  - `combo` : array
    - List of strings of vehicle parts used

## Reference

### Characters

Values for the `character` key.

| Character            | Input                | Game    |
| :------------------- | :------------------- | :------ |
| Baby Daisy           | `baby-daisy`         | `mk8dx` |
| Baby Luigi           | `baby-luigi`         | `mk8dx` |
| Baby Mario           | `baby-mario`         | `mk8dx` |
| Baby Peach           | `baby-peach`         | `mk8dx` |
| Baby Rosalina        | `baby-rosalina`      | `mk8dx` |
| Birdo                | `birdo`              | `mk8dx` |
| Birdo (Black)        | `birdo-black`        | `mk8dx` |
| Birdo (Blue)         | `birdo-blue`         | `mk8dx` |
| Birdo (Green)        | `birdo-green`        | `mk8dx` |
| Birdo (Light Blue)   | `birdo-light-blue`   | `mk8dx` |
| Birdo (Orange)       | `birdo-orange`       | `mk8dx` |
| Birdo (Red)          | `birdo-red`          | `mk8dx` |
| Birdo (White)        | `birdo-white`        | `mk8dx` |
| Birdo (Yellow)       | `birdo-yellow`       | `mk8dx` |
| Bowser               | `bowser`             | `mk8dx` |
| Bowser Jr.           | `bowser-jr`          | `mk8dx` |
| Daisy                | `daisy`              | `mk8dx` |
| Diddy Kong           | `diddy-kong`         | `mk8dx` |
| Donkey Kong          | `donkey-kong`        | `mk8dx` |
| Dry Bones            | `dry-bones`          | `mk8dx` |
| Dry Bowser           | `dry-bowser`         | `mk8dx` |
| Funky Kong           | `funky-kong`         | `mk8dx` |
| Iggy                 | `iggy`               | `mk8dx` |
| Inkling (Female)     | `inkling-female`     | `mk8dx` |
| Inkling (Lime)       | `inkling-lime`       | `mk8dx` |
| Inkling (Magenta)    | `inkling-magenta`    | `mk8dx` |
| Inkling (Male)       | `inkling-male`       | `mk8dx` |
| Inkling (Purple)     | `inkling-purple`     | `mk8dx` |
| Inkling (Teal)       | `inkling-teal`       | `mk8dx` |
| Isabelle             | `isabelle`           | `mk8dx` |
| Kamek                | `kamek`              | `mk8dx` |
| King Boo             | `king-boo`           | `mk8dx` |
| Koopa Troopa         | `koopa-troopa`       | `mk8dx` |
| Lakitu               | `lakitu`             | `mk8dx` |
| Larry                | `larry`              | `mk8dx` |
| Lemmy                | `lemmy`              | `mk8dx` |
| Link                 | `link`               | `mk8dx` |
| Link (BOTW)          | `link-botw`          | `mk8dx` |
| Ludwig               | `ludwig`             | `mk8dx` |
| Luigi                | `luigi`              | `mk8dx` |
| Mario                | `mario`              | `mk8dx` |
| Mario (Gold)         | `mario-gold`         | `mk8dx` |
| mario (Metal)        | `mario-metal`        | `mk8dx` |
| Mario (Tanooki)      | `mario-tanooki`      | `mk8dx` |
| Mii                  | `mii`                | `mk8dx` |
| Morton               | `morton`             | `mk8dx` |
| Pauline              | `pauline`            | `mk8dx` |
| Peach                | `peach`              | `mk8dx` |
| Peach (Cat)          | `peach-cat`          | `mk8dx` |
| Peach (Gold Pink)    | `peach-gold-pink`    | `mk8dx` |
| Peachette            | `peachette`          | `mk8dx` |
| Petey Piranha        | `petey-piranha`      | `mk8dx` |
| Rosalina             | `rosalina`           | `mk8dx` |
| Roy                  | `roy`                | `mk8dx` |
| Shy Guy              | `shy-guy`            | `mk8dx` |
| Shy Guy (Black)      | `shy-guy-black`      | `mk8dx` |
| Shy Guy (Blue)       | `shy-guy-blue`       | `mk8dx` |
| Shy Guy (Green)      | `shy-guy-green`      | `mk8dx` |
| Shy Guy (Light Blue) | `shy-guy-light-blue` | `mk8dx` |
| Shy Guy (Orange)     | `shy-guy-orange`     | `mk8dx` |
| Shy Guy (Pink)       | `shy-guy-pink`       | `mk8dx` |
| Shy Guy (White)      | `shy-guy-white`      | `mk8dx` |
| Shy Guy (Yellow)     | `shy-guy-yellow`     | `mk8dx` |
| Toad                 | `toad`               | `mk8dx` |
| Toadette             | `toadette`           | `mk8dx` |
| Villager (Female)    | `villager-female`    | `mk8dx` |
| Villager (Male)      | `villager-male`      | `mk8dx` |
| Waluigi              | `waluigi`            | `mk8dx` |
| Wario                | `wario`              | `mk8dx` |
| Wendy                | `wendy`              | `mk8dx` |
| Wiggler              | `wiggler`            | `mk8dx` |
| Yoshi                | `yoshi`              | `mk8dx` |
| Yoshi (Black)        | `yoshi-black`        | `mk8dx` |
| Yoshi (Blue)         | `yoshi-blue`         | `mk8dx` |
| Yoshi (Light Blue)   | `yoshi-light-blue`   | `mk8dx` |
| Yoshi (Orange)       | `yoshi-orange`       | `mk8dx` |
| Yoshi (Pink)         | `yoshi-pink`         | `mk8dx` |
| Yoshi (Red)          | `yoshi-red`          | `mk8dx` |
| Yoshi (White)        | `yoshi-white`        | `mk8dx` |
| Yoshi (Yellow)       | `yoshi-yellow`       | `mk8dx` |

### Colours 

Character & colour associations.

| Color      | Input        | Characters                                                                                                                 |
| :--------- | :----------- | :------------------------------------------------------------------------------------------------------------------------- |
| Red        | `red`        | Mario, Baby Mario, Toad, Shy Guy, Village (Male), Yoshi (Red), Birdo (Red), Diddy Kong, Funky Kong, Pauline, Petey Prianha |
| Green      | `green`      | Luigi, Baby Luigi, Yoshi, Bowser, Bowser Jr., Link, Iggy, Shy Guy (Green)                                                  |
| Lime       | `lime`       | Isabelle, Birdo (Green), Inkling (Green)                                                                                   |
| Blue       | `blue`       | Ludwig, Inkling (Male), Yoshi (Blue), Shy Guy (Blue), Birdo (Blue)                                                         |
| Light Blue | `light-blue` | Lemmy, Larry, Mii, Link (BOTW), Yoshi (Light Blue), Shy Guy (Light Blue), Birdo (Light Blue), Kamek                        |
| Teal       | `teal`       | Rosalina, Baby Rosalina, Inkling (Teal)                                                                                    |
| Yellow     | `yellow`     | Koopa Troopa, Lakitu, Wario, Donkey Kong, Mario (Gold), Yoshi (Yellow), Shy Guy (Yellow), Birdo (Yellow), Wiggler          |
| Orange     | `orange`     | Daisy, Baby Daisy, Mario (Tanooki), Inkling (Female), Yoshi (Orange), Shy Guy (Orange), Birdo (Orange)                     |
| Pink       | `pink`       | Peach, Baby Peach, Peach (Cat), Peach (Pink Gold), Villager (Female), Yoshi (Pink), Shy Guy (Pink), Peachette              |
| Magenta    | `magenta`    | Birdo, Roy, Wendy, Toadette, Inkling (Magenta)                                                                             |
| Purple     | `purple`     | Waluigi, Inkling (Purple)                                                                                                  |
| Black      | `black`      | Dry Bones,  Dry Bowser, Morton, Mario (Metal), Yoshi (Black), Shy Guy (Black), Birdo (Black)                               |
| White      | `white`      | King Boo, Yoshi (White), Shy Guy (White), Birdo (White)                                                                    |
