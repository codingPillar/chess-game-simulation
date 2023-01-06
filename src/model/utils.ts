import { BOARD_SIZE, SQUARE_SIZE } from "../constants.js";
import { Board } from "./board.js";
import { Color } from "./color.js";
import { Piece } from "./piece.js";
import { Bishop } from "./piecesImplementation/bishop.js";
import { King } from "./piecesImplementation/king.js";
import { Knight } from "./piecesImplementation/knight.js";
import { Queen } from "./piecesImplementation/queen.js";
import { Rook } from "./piecesImplementation/rook.js";
import { Vec2 } from "./vec2.js";

export function removeElem<T>(elements: T[], elem: T): boolean{
    const index = elements.indexOf(elem);
    if(index === -1) return false;
    elements.splice(index, 1);
    return true;
}

export function contains<T extends {equals: (arg:T) => boolean}>(elements: T[], element: T): boolean{
    return elements.findIndex((value: T) => {
        return value.equals(element);
    }) != -1;
}

interface PieceStartupData{
    positions: number[],
    builder: (position: Vec2, color: Color, board: Board) => Piece;
}

export const PIECES_STARTUP_DATA: PieceStartupData[] = [
    {
        positions : [0, BOARD_SIZE - 1],
        builder : (position: Vec2, color: Color, board: Board) => new Rook(position, color, board)
    },
    {
        positions : [1, BOARD_SIZE - 2],
        builder : (position: Vec2, color: Color, board: Board) => new Knight(position, color, board)
    },
    {
        positions : [2, BOARD_SIZE - 3],
        builder : (position: Vec2, color: Color, board: Board) => new Bishop(position, color, board)
    },
    {
        positions : [3],
        builder : (position: Vec2, color: Color, board: Board) => new Queen(position, color, board)
    },
    {
        positions : [4],
        builder : (position: Vec2, color: Color, board: Board) => new King(position, color, board)
    } 
];