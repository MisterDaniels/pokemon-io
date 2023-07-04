import { Vector } from "excalibur";
import { Item } from "@src/actors/item";
import { TileMapSceneInterface } from "@src/types/types";

function spawnObject(scene: TileMapSceneInterface, pos: Vector): void {
    let instance = new Item(pos);
    scene.add(instance);
    scene.instances.addActorAtTile(pos, instance);
}

export {
    spawnObject
}