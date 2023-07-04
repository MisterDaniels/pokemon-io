import { Engine, SceneActivationContext, Vector } from 'excalibur';
import TileMapScene from '@src/core/TileMapScene';

export default class Main extends TileMapScene {
    constructor() {
        super(10, 10);
    }

    public onInitialize(_engine: Engine): void {}
    public onActivate(_context: SceneActivationContext<unknown>): void {}
    public onDeactivate(_context: SceneActivationContext<undefined>): void {}

    public isTileBlocked(vec: Vector): boolean {
        const tile = this.tileMap.getTileByPoint(vec);

        if (!tile) return true;

        return false;
    }

    public hasTileItem(vec: Vector): boolean {
        const tile = this.tileMap.getTileByPoint(vec);

        if (!tile) return false;

        return this.instances.getActorsAtTile(vec).length > 0;
    }

    public removeTileItem(vec: Vector): void {
        const tile = this.tileMap.getTileByPoint(vec);

        if (!tile) return;

        return this.instances.removeAllActorAtTile(this, vec);
    }
}