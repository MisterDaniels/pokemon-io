import { Actor, Color, Vector } from "excalibur";
import { TILE_HEIGHT, TILE_WIDTH } from "@src/constants";

export class Item extends Actor {
    constructor(pos: Vector) {
        super({
            pos,
            width: TILE_WIDTH,
            height: TILE_HEIGHT,
            color: Color.Yellow
        });
    }
}