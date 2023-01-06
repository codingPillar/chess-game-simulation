import { Vec2 } from "../vec2.js";
import { DirectionMovingPiece } from "./direction-moving-piece.js";
export class Queen extends DirectionMovingPiece {
    constructor(position, color, board) {
        super(position, color, 'Q', board);
    }
    getPossibleDirections() {
        return this.generateAllDirections(Queen.directions);
    }
}
Queen.directions = [new Vec2(1, 1), new Vec2(-1, 1), new Vec2(1, 0), new Vec2(0, 1)];
