import { Piece } from "../piece.js";
export class DirectionMovingPiece extends Piece {
    getPossiblePositions() {
        const possibleDirections = this.getPossibleDirections();
        const possiblePositions = [];
        for (const dir of possibleDirections) {
            const currentPosition = this.position.copy().add(dir);
            while (this.board.softValidPosition(this.color, currentPosition)) {
                possiblePositions.push(currentPosition.copy());
                const blockingPiece = this.board.getSquare(currentPosition).getPiece();
                if (blockingPiece && blockingPiece.getColor() != this.color)
                    break;
                currentPosition.add(dir);
            }
        }
        return possiblePositions;
    }
}
