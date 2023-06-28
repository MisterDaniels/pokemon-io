import { Actor, Color, Engine, Input, vec } from "excalibur";
import { Main } from "@src/scenes";

export class Player extends Actor {
    constructor() {
        super({
            pos: vec(0, 0),
            width: 32,
            height: 32,
            color: Color.Red
        });
    }

    update(engine: Engine, delta: number): void {
        let pos = this.pos.clone();

        if (engine.input.keyboard.wasPressed(Input.Keys.ArrowUp)) {
            pos.y -= 32;
        }

        if (engine.input.keyboard.wasPressed(Input.Keys.ArrowDown)) {
            pos.y += 32;
        }

        if (engine.input.keyboard.wasPressed(Input.Keys.ArrowLeft)) {
            pos.x -= 32;
        }

        if (engine.input.keyboard.wasPressed(Input.Keys.ArrowRight)) {
            pos.x += 32;
        }

        if (!pos.equals(this.pos) && (this.scene as Main).isTileBlocked(pos)) {
            return;
        }

        this.pos = pos;
    }
}