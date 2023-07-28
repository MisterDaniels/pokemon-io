import { Color, DisplayMode, Engine, Label, Loader } from "excalibur";
import { Player } from "@src/actors/player";
import { Main as MainScene, Victory as VictoryScene } from '@src/scenes';
import { spawnObject } from "@src/mechanics/spawner";
import { randEmptyTile } from "./utils/math";
import GameManager from "./core/GameManager";

class Game extends Engine {

    private gameManager: GameManager;
    private player: Player;
    private scene: MainScene;
    private scoreLabel: Label = new Label({
        text: '',
        color: Color.White
    });
    private timeLabel: Label = new Label({
        text: '',
        color: Color.White
    });

    constructor() {
        super({ displayMode: DisplayMode.FitScreen });
        this.gameManager = new GameManager();
        this.player = new Player();
        this.scene = new MainScene(this.gameManager);
        this.scene.add(this.player);
    }

    public onInitialize(_engine: Engine): void {
        this.gameManager.startGame(_engine, [{ id: 0 } as Player]);

        this.scoreLabel = new Label({
            text: '', 
            x: _engine.canvasWidth / 2,
            y: 50,
            color: Color.White
        });
        this.scene.add(this.scoreLabel);

        this.timeLabel = new Label({
            text: '',
            x: _engine.canvasWidth / 2,
            y: 80,
            color: Color.White
        });
        this.scene.add(this.timeLabel);
    }

    public start(loader?: Loader | undefined): Promise<void> {
        game.add('main', this.scene);

        const victoryScene = new VictoryScene(this.gameManager);
        game.add('victory', victoryScene);

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

    public onPostUpdate(_engine: Engine, _delta: number): void {
        this.scoreLabel.text = `Pontuação: ${ this.gameManager.getScore({ id: 0 } as Player)?.points }`;
        this.timeLabel.text = `Tempo: ${ this.gameManager.getTimeElapsed().toFixed(2) } segundos`;
        super.onPostUpdate(_engine, _delta);
    }
}

const game = new Game();
game.start().then(() => {
    game.goToScene('main');
});