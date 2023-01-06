export class Square {
    constructor(position, color) {
        this.position = position;
        this.color = color;
        this.piece = null;
    }
    getPosition() {
        return this.position.copy();
    }
    addPiece(piece) {
        this.piece = piece;
    }
    isOccupied() {
        return this.piece != null;
    }
    getPiece() {
        return this.piece;
    }
    getColor() {
        return this.color;
    }
    clearPiece() {
        this.piece = null;
    }
}
