import { BOARD_SIZE } from "../constants.js";
import { Bishop } from "./piecesImplementation/bishop.js";
import { King } from "./piecesImplementation/king.js";
import { Knight } from "./piecesImplementation/knight.js";
import { Queen } from "./piecesImplementation/queen.js";
import { Rook } from "./piecesImplementation/rook.js";
export function removeElem(elements, elem) {
    const index = elements.indexOf(elem);
    if (index === -1)
        return false;
    elements.splice(index, 1);
    return true;
}
export function contains(elements, element) {
    return elements.findIndex((value) => {
        return value.equals(element);
    }) != -1;
}
export const PIECES_STARTUP_DATA = [
    {
        positions: [0, BOARD_SIZE - 1],
        builder: (position, color, board) => new Rook(position, color, board)
    },
    {
        positions: [1, BOARD_SIZE - 2],
        builder: (position, color, board) => new Knight(position, color, board)
    },
    {
        positions: [2, BOARD_SIZE - 3],
        builder: (position, color, board) => new Bishop(position, color, board)
    },
    {
        positions: [3],
        builder: (position, color, board) => new Queen(position, color, board)
    },
    {
        positions: [4],
        builder: (position, color, board) => new King(position, color, board)
    }
];
