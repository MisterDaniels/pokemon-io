import { Engine, Scene, SceneActivationContext, TileMap, Vector, vec } from 'excalibur';

export default class Main extends Scene {
    public tileMap: TileMap;

    constructor() {
        super();

        this.tileMap = new TileMap({
            pos: vec(0, 0),
            tileWidth: 32,
            tileHeight: 32,
            rows: 10,
            columns: 10
        });
    }

    public onInitialize(_engine: Engine): void {}
    public onActivate(_context: SceneActivationContext<unknown>): void {}
    public onDeactivate(_context: SceneActivationContext<undefined>): void {}

    public isTileBlocked(vec: Vector): boolean {
        const tile = this.tileMap.getTileByPoint(vec);

        if (!tile) return true;

        return false;
    }
}