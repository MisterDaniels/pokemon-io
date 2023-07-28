import { Scene, TileMap } from "excalibur";
import Instances from "@src/core/instances";
import GameManager from "@src/core/GameManager";

interface TileMapSceneInterface extends Scene {
    gameManager: GameManager;
    tileMap: TileMap;
    instances: Instances;
}

interface Player {
    id: number
}

interface PlayerScore {
    player: Player,
    points: number
}