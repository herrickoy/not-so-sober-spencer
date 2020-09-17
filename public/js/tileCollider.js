class TileResolver {
    constructor(matrix, tileSize = 16) {
        this.matrix = matrix;
    }

    toIndex(pos) {
        return Math.floor(pos / this.tileSize);
    }
}

window.TileResolver = TileResolver;

export default class TileCollider {
    constructor(tiles) {
        this.tiles = tiles;
    }

    test(entity) {
        console.log('Testing', entity);
        
    }
}
