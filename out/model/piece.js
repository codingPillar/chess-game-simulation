export class Piece {
    constructor(position, color, symbol, board) {
        this.hasMoved = false;
        this.color = color;
        this.position = position;
        this.symbol = symbol;
        this.board = board;
    }
    getPosition() {
        return this.position.copy();
    }
    move(newPosition) {
        this.position = newPosition.copy();
        this.hasMoved = true;
    }
    alterPosition(newPosition) {
        this.position = newPosition.copy();
    }
    getSymbol() {
        return this.symbol;
    }
    getColor() {
        return this.color;
    }
    generateAllDirections(baseDirs) {
        const possibleDirections = [];
        for (const dir of baseDirs) {
            possibleDirections.push(dir);
            possibleDirections.push(dir.copy().inverse());
        }
        return possibleDirections;
    }
}
