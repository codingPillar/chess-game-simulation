import { Color } from "./color.js";
import { Piece } from "./piece.js";
import { Vec2 } from "./vec2.js";

export class Square{
    private position: Vec2;
    private piece: Piece | null;
    private color: Color;

    constructor(position: Vec2, color: Color){
        this.position = position;
        this.color = color;
        this.piece = null;
    }

    getPosition(): Vec2 {
        return this.position.copy();
    }

    addPiece(piece: Piece){
        this.piece = piece;
    }

    isOccupied(): boolean {
        return this.piece != null;
    }

    getPiece(): Piece | null{
        return this.piece
    }

    getColor(): Color {
        return this.color;
    }

    clearPiece(): void{
        this.piece = null;
    }
}