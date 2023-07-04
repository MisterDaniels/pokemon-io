import { DisplayMode, Engine, Loader } from "excalibur";
import { Player } from "@src/actors/player";
import { Main as MainScene } from '@src/scenes';
import { spawnObject } from "@src/mechanics/spawner";
import { randEmptyTile } from "./utils/math";

class Game extends Engine {
    private player: Player;
    private scene: MainScene;

    constructor() {
        super({ displayMode: DisplayMode.FitScreen });
        this.player = new Player();
        this.scene = new MainScene();
        this.scene.add(this.player);
    }

    public start(loader?: Loader | undefined): Promise<void> {
        game.add('main', this.scene);

        let foodSpawner = setInterval(() => {
            let tileMap = this.scene.tileMap;
            let tile = randEmptyTile(tileMap);

            if (!tile) {
                clearInterval(foodSpawner);
                return;
            }

            spawnObject(this.scene, tile.pos);
        }, 5000);

        return super.start(loader);
    }
}

const game = new Game();
game.start().then(() => {
    game.goToScene('main');
});