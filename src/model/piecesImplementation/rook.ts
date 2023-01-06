import { Board } from "../board.js";
import { Color } from "../color.js";
import { Vec2 } from "../vec2.js";
import { DirectionMovingPiece } from "./direction-moving-piece.js";

export class Rook extends DirectionMovingPiece{

    private static directions: Vec2[] = [new Vec2(1, 0), new Vec2(0, 1)];

    constructor(position: Vec2, color: Color, board: Board){
        super(position, color, 'R', board);
    }

    protected getPossibleDirections(): Vec2[] {
        return this.generateAllDirections(Rook.directions);
    }
}