import { Actor, Color, Engine, Input, vec } from "excalibur";
import { Main } from "@src/scenes";
import { TILE_HEIGHT, TILE_WIDTH } from "@src/constants";
import TileMapScene from "@src/core/TileMapScene";

export class Player extends Actor {
    constructor() {
        super({
            pos: vec(0, 0),
            width: TILE_WIDTH,
            height: TILE_HEIGHT,
            color: Color.Red
        });
    }

    update(engine: Engine, delta: number): void {
        let pos = this.pos.clone();

        if (engine.input.keyboard.wasPressed(Input.Keys.ArrowUp)) {
            pos.y -= TILE_HEIGHT;
        }

        if (engine.input.keyboard.wasPressed(Input.Keys.ArrowDown)) {
            pos.y += TILE_HEIGHT;
        }

        if (engine.input.keyboard.wasPressed(Input.Keys.ArrowLeft)) {
            pos.x -= TILE_WIDTH;
        }

        if (engine.input.keyboard.wasPressed(Input.Keys.ArrowRight)) {
            pos.x += TILE_WIDTH;
        }

        if (!pos.equals(this.pos) && (this.scene as Main).isTileBlocked(pos)) {
            return;
        }

        this.pos = pos;

        if ((this.scene as Main).hasTileItem(this.pos)) {
            (this.scene as TileMapScene).instances.removeAllActorAtTile(this.scene as TileMapScene, this.pos);
        }
    }
}