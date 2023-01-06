import { Vec2 } from "../vec2.js";
import { DirectionMovingPiece } from "./direction-moving-piece.js";
export class Bishop extends DirectionMovingPiece {
    constructor(position, color, board) {
        super(position, color, 'B', board);
    }
    getPossibleDirections() {
        return this.generateAllDirections(Bishop.directions);
    }
}
Bishop.directions = [new Vec2(1, 1), new Vec2(-1, 1)];
