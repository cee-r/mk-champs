+++
draft = false

# Race
date = {{ .Date }}
title = "{{ replace .File.ContentBaseName "-" " " | title }}"
description = "Ruleset"
game = "mk8dx"
mode = ["vs", "150CC"]

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
