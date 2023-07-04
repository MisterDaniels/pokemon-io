import { Scene, TileMap } from "excalibur";
import Instances from "@src/core/instances";

interface TileMapSceneInterface extends Scene {
    tileMap: TileMap;
    instances: Instances;
}