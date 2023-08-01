import { Scene, TileMap } from "excalibur";
import Instances from "@src/core/instances";
import GameManager from "@src/core/GameManager";

interface TileMapSceneInterface extends Scene {
    gameManager: GameManager;
    tileMap: TileMap;
    instances: Instances;
}

interface PlayerType {
    id: number
}

interface PlayerScore {
    player: PlayerType,
    points: number
}

interface Genre {
    male: 'male',
    female: 'female'
}

interface Type {
    bug: 'bug',
    dragon: 'dragon',
    fairy: 'fairy',
    fire: 'fire',
    ghost: 'ghost',
    ground: 'ground',
    normal: 'normal',
    psychic: 'psychic',
    steel: 'steel',
    dark: 'dark',
    electric: 'electric',
    fighting: 'fighting',
    flying: 'flying',
    grass: 'grass',
    ice: 'ice',
    poison: 'poison',
    rock: 'rock',
    water: 'water'
}

interface Stats {
    hp: number,
    attack: number,
    defense: number,
    specialAttack: number,
    specialDefense: number,
    speed: number
}

interface PokemonType {
    id: number,
    name: string,
    genre: Genre,
    types: Type[],
    height: number,
    weight: number,
    stats: Stats
}