import { BOARD_SIZE } from "../constants.js";
import { Color } from "./color.js";
import { Pawn } from "./piecesImplementation/pawn.js";
import { Square } from "./square.js";
import { contains, PIECES_STARTUP_DATA, removeElem } from "./utils.js";
import { Vec2 } from "./vec2.js";
export class Board {
    constructor() {
        this.pieces = [];
        this.kings = [];
        this.squares = [];
        this.selected = null;
        this.currentValidPositions = [];
        this.turn = Color.WHITE;
        this.reset();
    }
    reset() {
        this.pieces = [];
        this.squares = [];
        this.selected = null;
        this.currentValidPositions = [];
        this.turn = Color.WHITE;
        this.initSquares();
        this.initPieces();
        this.kings = this.pieces.filter((piece) => {
            return piece.getSymbol() === 'K';
        });
    }
    moveSelectedPiece(position) {
        var _a, _b;
        const previousPosition = (_b = (_a = this.selected) === null || _a === void 0 ? void 0 : _a.getPiece()) === null || _b === void 0 ? void 0 : _b.getPosition();
        if (!this.selected || !this.selected.getPiece()
            || !contains(this.currentValidPositions, position))
            return false;
        this.selected.getPiece().move(position);
        const nextSquare = this.getSquare(position);
        if (nextSquare.getPiece())
            removeElem(this.pieces, nextSquare.getPiece());
        nextSquare.addPiece(this.selected.getPiece());
        this.selected.clearPiece();
        this.clearSelection();
        this.changeTurn();
        return true;
    }
    // WITHOUT CHECKING FOR KING STATE AFTER THE MOVE;
    softValidPosition(pieceColor, position) {
        const inBound = this.inBound(position);
        if (!inBound)
            return false;
        const occupiedPiece = this.getSquare(position).getPiece();
        return !occupiedPiece || (occupiedPiece.getColor() != pieceColor);
    }
    select(position) {
        this.clearSelection();
        if (!this.inBound(position))
            return;
        const square = this.squares[position.y][position.x];
        if (!square.getPiece() || square.getPiece().getColor() != this.turn)
            return;
        this.selected = square;
        this.calculateCurrentPossiblePositions();
        if (this.currentValidPositions.length === 0)
            console.log('NO POSSIBLE MOVES FOR SELECTED PIECE');
    }
    initSquares() {
        this.squares = [];
        for (let i = 0; i < BOARD_SIZE; i++) {
            this.squares.push([]);
            for (let j = 0; j < BOARD_SIZE; j++)
                this.squares[i].push(new Square(new Vec2(j, i), ((i + j) % 2 == 0) ? Color.WHITE : Color.BLACK));
        }
    }
    clearSelection() {
        this.selected = null;
        this.currentValidPositions = [];
    }
    changeTurn() {
        this.turn = (this.turn === Color.WHITE) ? Color.BLACK : Color.WHITE;
    }
    initPieces() {
        for (let i = 0; i < BOARD_SIZE; i++) {
            this.addPiece(new Pawn(new Vec2(i, 1), Color.BLACK, this));
            this.addPiece(new Pawn(new Vec2(i, 6), Color.WHITE, this));
        }
        for (const pieceData of PIECES_STARTUP_DATA) {
            for (const pos of pieceData.positions) {
                this.addPiece(pieceData.builder(new Vec2(pos, 0), Color.BLACK, this));
                this.addPiece(pieceData.builder(new Vec2(pos, BOARD_SIZE - 1), Color.WHITE, this));
            }
        }
    }
    addPiece(piece) {
        const position = piece.getPosition();
        if (!this.inBound(position))
            return;
        this.getSquare(position).addPiece(piece);
        this.pieces.push(piece);
    }
    inBound(position) {
        return position.x >= 0 && position.x < BOARD_SIZE && position.y >= 0 && position.y < BOARD_SIZE;
    }
    calculateCurrentPossiblePositions() {
        this.currentValidPositions = [];
        if (!this.selected || !this.selected.isOccupied())
            return;
        this.currentValidPositions = this.selected.getPiece().getPossiblePositions().filter((position) => {
            const currentPiece = this.selected.getPiece();
            const removedPiece = this.getSquare(position).getPiece();
            this.prepareKingVerification(currentPiece, position);
            const kingState = this.checkKingState(currentPiece.getColor(), position);
            this.revertStateAfterVerification(currentPiece, removedPiece, this.selected.getPosition());
            return kingState;
        });
    }
    // TODO, implement
    checkKingState(color, newPosition) {
        const kingPosition = this.getKing(color).getPosition();
        for (const piece of this.pieces) {
            // second condition is to make sure not to consider eaten pieces (not removed from general list before confirmation)
            if (piece.getColor() === color || piece.getPosition().equals(newPosition))
                continue;
            if (contains(piece.getPossiblePositions(), kingPosition))
                return false;
        }
        return true;
    }
    prepareKingVerification(piece, newPosition) {
        this.getSquare(piece.getPosition()).clearPiece();
        piece.alterPosition(newPosition);
        this.getSquare(newPosition).addPiece(piece);
    }
    revertStateAfterVerification(piece, removedPiece, previousPosition) {
        const currentSquare = this.getSquare(piece.getPosition());
        currentSquare.clearPiece();
        if (removedPiece)
            currentSquare.addPiece(removedPiece);
        piece.alterPosition(previousPosition);
        this.getSquare(previousPosition).addPiece(piece);
    }
    getKing(color) {
        return (this.kings[0].getColor() === color) ? this.kings[0] : this.kings[1];
    }
    // SHOULD NOT RETURN REFERENCE BUT COPY FOR ALL THE GET METHODS;
    getSquares() {
        return this.squares;
    }
    getSquare(position) {
        if (!this.inBound(position))
            return null;
        return this.squares[position.y][position.x];
    }
    getSelectedSquare() {
        return this.selected;
    }
    getPieces() {
        return this.pieces;
    }
    getCurrentValidPositions() {
        return this.currentValidPositions;
    }
}
