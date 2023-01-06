import { Vec2 } from "../vec2.js";
import { DirectionMovingPiece } from "./direction-moving-piece.js";
export class Rook extends DirectionMovingPiece {
    constructor(position, color, board) {
        super(position, color, 'R', board);
    }
    getPossibleDirections() {
        return this.generateAllDirections(Rook.directions);
    }
}
Rook.directions = [new Vec2(1, 0), new Vec2(0, 1)];
