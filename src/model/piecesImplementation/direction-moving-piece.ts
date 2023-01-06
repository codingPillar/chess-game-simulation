import { Piece } from "../piece.js";
import { Vec2 } from "../vec2.js";

export abstract class DirectionMovingPiece extends Piece{

    protected abstract getPossibleDirections(): Vec2[];

    getPossiblePositions(): Vec2[] {
        const possibleDirections: Vec2[] = this.getPossibleDirections();
        const possiblePositions: Vec2[] = [];
        for(const dir of possibleDirections){
            const currentPosition = this.position.copy().add(dir);
            while(this.board.softValidPosition(this.color, currentPosition)){
                possiblePositions.push(currentPosition.copy());
                const blockingPiece = this.board.getSquare(currentPosition)!.getPiece();
                if(blockingPiece && blockingPiece.getColor() != this.color) break;
                currentPosition.add(dir);
            }
        }
        return possiblePositions;
    }
}