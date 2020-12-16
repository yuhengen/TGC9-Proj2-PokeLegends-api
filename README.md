# Pokemon Legends
Welcome to Pokemon Legends! Here, you will get to experience a simple Pokemon game done by me, with references to the official Pokemon game battles and some of their systems. All feedbacks regarding the game for improvements are welcome!

## Context
Pokemon Legends is a game project done during my education, where I will utilize what I learnt in my lectures about Vue, Express and MongoDB to develop a reactive frontend frameworks and RESTful API.

# Note
This repository only contains the backend codes for the Pokemon Legends project.
Frontend codes can be found at [TGC9-Proj2-PokeLegends-vue](https://github.com/yuhengen/TGC9-Proj2-PokeLegends-vue)

# Sample document from MongoDB

## Collection - userdata
```
{
	"_id": {
		"$oid": "5fd97e3ad86335c78581f055"
	},
	"username": "phantomshiro",
	"password": "admin",
	"email": "yuhengen@gmail.com",
	"gender": "Male",
	"game_currency": {
		"$numberInt": "0"
	},
	"pokemon_team": [
		{
			"pokemon_name": "Charmander",
			"pokemon_id": {
				"$numberInt": "4"
			},
			"types": [
				"fire"
			],
			"lvl": {
				"$numberInt": "1"
			},
			"exp": {
				"$numberInt": "0"
			},
			"stats": {
				"hp": {
					"$numberInt": "39"
				},
				"atk": {
					"$numberInt": "52"
				},
				"def": {
					"$numberInt": "43"
				},
				"sp-atk": {
					"$numberInt": "60"
				},
				"sp-def": {
					"$numberInt": "50"
				},
				"speed": {
					"$numberInt": "65"
				}
			}
		}
	],
	"pokedex": [
		{
			"pokemon_id": {
				"$numberInt": "4"
			},
			"pokemon_name": "Charmander"
		}
	],
	"badges": [
		{
			"badge_name": "Boulder Badge",
			"badge_id": {
				"$numberInt": "1"
			}
		}
	],
	"bag": [
		{
			"item_name": "Poke Ball",
			"item_count": {
				"$numberInt": "1"
			},
			"item_id": {
				"$numberInt": "1"
			}
		}
	]
}
```

## Collection - movesets
```
{
	"_id": {
		"$oid": "5fd998c8d86335c78581f05a"
	},
	"pokemon_id": {
		"$numberInt": "4"
	},
	"pokemon_name": "Charmander",
	"skillset": [
		{
			"attack": "Attack",
			"power": {
				"$numberInt": "20"
			},
			"type": "Normal"
		},
		{
			"move1": "Ember",
			"power": {
				"$numberInt": "20"
			},
			"type": "Fire"
		},
		{
			"move2": "Dragonbreath",
			"power": {
				"$numberInt": "30"
			},
			"type": "Dragon"
		},
		{
			"ultimate": "Flamethrower",
			"power": {
				"$numberInt": "45"
			},
			"type": "Fire"
		}
	]
}
```

## Collection - items
```
{
	"_id": {
		"$oid": "5fd99d2cd86335c78581f05c"
	},
	"item_id": {
		"$numberInt": "1"
	},
	"item_name": "Poke Ball",
	"item_category": "Poke Balls"
}
```

## Collection - gymleaders
```
{
	"_id": {
		"$oid": "5fd99ae1d86335c78581f05b"
	},
	"gymleader_name": "Brock",
	"gymleader_city": "Pewter City",
	"badge_name": "Boulder Badge",
	"badge_id": {
		"$numberInt": "1"
	},
	"pokemon_team": [
		{
			"pokemon_name": "Charmander",
			"pokemon_id": {
				"$numberInt": "4"
			},
			"types": [
				"fire"
			],
			"lvl": {
				"$numberInt": "5"
			}
		}
	]
}
```