import { DisplayMode, Engine, Loader } from "excalibur";
import { Player } from "@src/actors/player";
import { Main as MainScene } from '@src/scenes';

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
        return super.start(loader);
    }
}

const game = new Game();
game.start().then(() => {
    game.goToScene('main');
});