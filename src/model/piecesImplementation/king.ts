import { Board } from "../board.js";
import { Color } from "../color.js";
import { Piece } from "../piece.js";
import { Vec2 } from "../vec2.js";

export class King extends Piece{

    private static directions: Vec2[] = [new Vec2(1, 1), new Vec2(-1, 1), new Vec2(1, 0), new Vec2(0, 1)];

    constructor(position: Vec2, color: Color, board: Board){
        super(position, color, 'K', board);
    }

    getPossiblePositions(): Vec2[] {
        const possibleDirs = this.generateAllDirections(King.directions);
        const possiblePositions: Vec2[] = [];
        for(const dir of possibleDirs){
            const currentPosition = this.position.getAdd(dir);
            if(this.board.softValidPosition(this.color, currentPosition)) possiblePositions.push(currentPosition);
        } 
        return possiblePositions;
    }

}