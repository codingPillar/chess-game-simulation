import { Board } from "./board.js";
import { Color } from "./color.js";
import { Vec2 } from "./vec2.js";

export abstract class Piece{
    protected color: Color;
    protected position: Vec2;
    protected symbol: string;
    protected board: Board;

    protected hasMoved: boolean = false;

    constructor(position: Vec2, color: Color, symbol: string, board: Board){
        this.color = color;
        this.position = position;
        this.symbol = symbol;
        this.board = board;
    }

    abstract getPossiblePositions(): Vec2[];

    getPosition(){
        return this.position.copy();
    }

    move(newPosition: Vec2): void {
        this.position = newPosition.copy();
        this.hasMoved = true;
    }

    alterPosition(newPosition: Vec2){
        this.position = newPosition.copy();
    }

    getSymbol(): string {
        return this.symbol;
    }

    getColor(): Color {
        return this.color;
    }

    protected generateAllDirections(baseDirs: Vec2[]): Vec2[]{
        const possibleDirections: Vec2[] = [];
        for(const dir of baseDirs){
            possibleDirections.push(dir);
            possibleDirections.push(dir.copy().inverse());
        }
        return possibleDirections;
    }
}