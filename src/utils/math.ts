import { Tile, TileMap, Vector, vec } from "excalibur";

function randTile(rows: number, columns: number): Vector {
    return vec(Math.floor(Math.random() * rows), Math.floor(Math.random() * columns));
}

function randEmptyTile(tileMap: TileMap): Tile | null {
    let emptyTiles = tileMap.tiles.filter((tile: Tile): boolean => {
        return !tile.tags.length;
    });

    if (!emptyTiles.length) return null;

    return emptyTiles[Math.floor(Math.random() * emptyTiles.length)];
}

export {
    randTile,
    randEmptyTile
}