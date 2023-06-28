import { Actor, Color, Engine, vec } from "excalibur";

export class Player extends Actor {
    constructor() {
        super({
            pos: vec(150, 150),
            width: 32,
            height: 32,
            color: Color.Red
        });
    }
}