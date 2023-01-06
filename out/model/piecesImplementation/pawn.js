import { Color } from "../color.js";
import { Piece } from "../piece.js";
import { Vec2 } from "../vec2.js";
export class Pawn extends Piece {
    constructor(position, color, board) {
        super(position, color, 'P', board);
    }
    getPossiblePositions() {
        var _a;
        const direction = new Vec2(0, 1);
        const positions = [];
        if (this.color === Color.WHITE)
            direction.inverse();
        const frontSquare = this.board.getSquare(this.position.getAdd(direction));
        if (!frontSquare)
            return [];
        if (!frontSquare.isOccupied()) {
            positions.push(this.position.getAdd(direction));
            // TO HANDLE FIRST MOVE 2 SQUARES MOVE;
            const secondFrontSquare = this.board.getSquare(this.position.getAdd(direction.getScale(2)));
            if (!this.hasMoved && secondFrontSquare && !secondFrontSquare.isOccupied())
                positions.push(this.position.getAdd(direction.getScale(2)));
        }
        // 2 POSSIBLE DIAGONALS;
        for (let i = 0; i < 2; i++) {
            const currentPosition = this.position.getAdd(direction).add(new Vec2(Math.pow(-1, i), 0));
            const otherPiece = (_a = this.board.getSquare(currentPosition)) === null || _a === void 0 ? void 0 : _a.getPiece();
            if (otherPiece && otherPiece.getColor() != this.color)
                positions.push(currentPosition);
        }
        return positions;
    }
    getPossibleDirections() { return []; }
}
