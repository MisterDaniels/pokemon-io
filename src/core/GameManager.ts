import { Engine } from "excalibur";
import { SCORE_VICTORY } from "@src/constants";
import { Player, PlayerScore } from "@src/types/types";

export default class GameManager {
    
    private engine: Engine | null = null;
    private startTime: number = 0;
    private scores: PlayerScore[] = [];

    public startGame(_engine: Engine, players: Player[]): void {
        this.engine = _engine;
        this.startTime = Date.now();
        
        players.forEach((player: Player) => {
            this.scores.push({
                player: player,
                points: 0
            } as PlayerScore);
        });
    }

    public setScore(player: Player, points: number = 1): boolean {
        const index = this.scores.findIndex((playerScore: PlayerScore) => playerScore.player.id === player.id);

        if (index === -1) return false;

        if ((this.scores[index].points + points) >= SCORE_VICTORY) this.engine?.goToScene('victory');

        this.scores[index].points += points;
        return true;
    }

    public getScore(player: Player): PlayerScore | null {
        const index = this.scores.findIndex((playerScore: PlayerScore) => playerScore.player.id === player.id);

        if (index === -1) return null;

        return this.scores[index];
    }

    public getTimeElapsed(): number {
        const currentTime = Date.now();
        return (currentTime - this.startTime) / 1000;
    }

}