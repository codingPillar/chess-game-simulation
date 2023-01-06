import { Piece } from "../piece.js";
import { Vec2 } from "../vec2.js";
export class Knight extends Piece {
    constructor(position, color, board) {
        // C for cavalier (because of collision with king)
        super(position, color, 'C', board);
    }
    getPossiblePositions() {
        const directions = this.generateAllDirections(Knight.directions);
        const possiblePositions = [];
        for (const dir of directions) {
            const currentPosition = this.position.getAdd(dir);
            if (this.board.softValidPosition(this.color, currentPosition))
                possiblePositions.push(currentPosition);
        }
        return possiblePositions;
    }
}
Knight.directions = [new Vec2(1, 2), new Vec2(1, -2), new Vec2(2, 1), new Vec2(-2, 1)];
