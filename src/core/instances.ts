import { TILE_HEIGHT, TILE_WIDTH } from "@src/constants";
import { Actor, Vector } from "excalibur";
import TileMapScene from "./TileMapScene";

export default class Instances {
    private instances: (Actor[] | null)[][] = [];

    public getActorsAtTile(pos: Vector): Actor[] | [] {
        const { x, y } = this.getIndex(pos);

        if (!this.instances[y] || !this.instances[y][x]) return [];

        return this.instances[y][x] as Actor[];
    }

    public addActorAtTile(pos: Vector, actor: Actor) {
        const { x, y } = this.getIndex(pos);

        if (!this.instances[y]) {
            this.instances[y] = [];
        }

        if (!this.instances[y][x]) {
            this.instances[y][x] = [];
        }

        this.instances[y][x]?.push(actor);
    }

    public removeActorAtTile(pos: Vector, actor: Actor) {

    }

    public removeAllActorAtTile(scene: TileMapScene, pos: Vector) {
        const { x, y } = this.getIndex(pos);

        if (!this.instances[y]) return;

        this.instances[y][x]?.forEach((instance: Actor) => {
            scene.remove(instance);
        });

        this.instances[y][x] = [];
    }

    private getIndex(pos: Vector): Vector {
        return new Vector(Math.floor(pos.x / TILE_WIDTH), Math.floor(pos.y / TILE_HEIGHT));
    }
}