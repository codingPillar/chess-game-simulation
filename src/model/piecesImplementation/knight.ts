import { Board } from "../board.js";
import { Color } from "../color.js";
import { Piece } from "../piece.js";
import { Vec2 } from "../vec2.js";

export class Knight extends Piece{

    private static directions: Vec2[] = [new Vec2(1, 2), new Vec2(1, -2), new Vec2(2, 1), new Vec2(-2, 1)];

    constructor(position: Vec2, color: Color, board: Board){
        // C for cavalier (because of collision with king)
        super(position, color, 'C', board);
    }

    getPossiblePositions(): Vec2[] {
        const directions = this.generateAllDirections(Knight.directions);
        const possiblePositions: Vec2[] = [];
        for(const dir of directions){
            const currentPosition = this.position.getAdd(dir);
            if(this.board.softValidPosition(this.color, currentPosition)) possiblePositions.push(currentPosition);
        } 
        return possiblePositions;
    }

}