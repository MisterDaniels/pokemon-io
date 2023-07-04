import { TILE_HEIGHT, TILE_WIDTH } from "@src/constants";
import { TileMapSceneInterface } from "@src/types/types";
import { Scene, TileMap, vec } from "excalibur";
import Instances from "@src/core/instances";

export default class TileMapScene extends Scene implements TileMapSceneInterface {
    public tileMap: TileMap;
    public instances: Instances = new Instances();
    
    constructor(rows: number, columns: number) {
        super();

        this.tileMap = new TileMap({
            pos: vec(0, 0),
            tileWidth: TILE_WIDTH,
            tileHeight: TILE_HEIGHT,
            rows, columns
        });
    }
}