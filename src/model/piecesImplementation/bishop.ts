import { Board } from "../board.js";
import { Color } from "../color.js";
import { Vec2 } from "../vec2.js";
import { DirectionMovingPiece } from "./direction-moving-piece.js";

export class Bishop extends DirectionMovingPiece{

    private static directions: Vec2[] = [new Vec2(1, 1), new Vec2(-1, 1)];

    constructor(position: Vec2, color: Color, board: Board){
        super(position, color, 'B', board);
    }

    protected getPossibleDirections(): Vec2[] {
        return this.generateAllDirections(Bishop.directions);
    }

}