import { Color, Engine, Font, Label, TextAlign, Vector } from 'excalibur';
import TileMapScene from '@src/core/TileMapScene';
import GameManager from '@src/core/GameManager';

export default class Victory extends TileMapScene {
    constructor(gameManager: GameManager) {
        super(gameManager, 10, 10);
    }

    public onInitialize(_engine: Engine): void {
        const victoryLabel = new Label({
            text: 'Vitória!', 
            x: _engine.canvasWidth / 2,
            y: _engine.canvasHeight / 2,
            color: Color.White,
            font: new Font({
                size: 48,
                textAlign: TextAlign.Center
            })
        });
        this.add(victoryLabel);
    }
}