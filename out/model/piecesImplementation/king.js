import { Piece } from "../piece.js";
import { Vec2 } from "../vec2.js";
export class King extends Piece {
    constructor(position, color, board) {
        super(position, color, 'K', board);
    }
    getPossiblePositions() {
        const possibleDirs = this.generateAllDirections(King.directions);
        const possiblePositions = [];
        for (const dir of possibleDirs) {
            const currentPosition = this.position.getAdd(dir);
            if (this.board.softValidPosition(this.color, currentPosition))
                possiblePositions.push(currentPosition);
        }
        return possiblePositions;
    }
}
King.directions = [new Vec2(1, 1), new Vec2(-1, 1), new Vec2(1, 0), new Vec2(0, 1)];
