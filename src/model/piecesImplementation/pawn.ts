import { Board } from "../board.js";
import { Color } from "../color.js";
import { Piece } from "../piece.js";
import { Vec2 } from "../vec2.js";

export class Pawn extends Piece{

    constructor(position: Vec2, color: Color, board: Board){
        super(position, color, 'P', board);
    }

    getPossiblePositions(): Vec2[] {
        const direction = new Vec2(0, 1);
        const positions: Vec2[] = [];
        if(this.color === Color.WHITE) direction.inverse();
        const frontSquare = this.board.getSquare(this.position.getAdd(direction));
        if(!frontSquare) return [];
        if(!frontSquare.isOccupied()){
            positions.push(this.position.getAdd(direction));
            // TO HANDLE FIRST MOVE 2 SQUARES MOVE;
            const secondFrontSquare = this.board.getSquare(this.position.getAdd(direction.getScale(2)));
            if(!this.hasMoved && secondFrontSquare && !secondFrontSquare.isOccupied())
                positions.push(this.position.getAdd(direction.getScale(2)));
        } 
        // 2 POSSIBLE DIAGONALS;
        for(let i = 0; i < 2; i++){
            const currentPosition = this.position.getAdd(direction).add(new Vec2(Math.pow(-1, i), 0));
            const otherPiece = this.board.getSquare(currentPosition)?.getPiece();
            if(otherPiece && otherPiece.getColor() != this.color) positions.push(currentPosition);
        }
        return positions;
    }

    protected getPossibleDirections(): Vec2[] { return []; }
}