import { BLACK_SQUARE_COLOR, BOARD_SIZE, CANVAS_HEIGHT, CANVAS_WIDTH, DEBUG_FONT_SIZE, FONT_SIZE, POSSIBLE_POSITIONS_COLOR, SELECTED_COLOR, SQUARE_SIZE, WHITE_SQUARE_COLOR } from "../constants.js";
import { Color } from "../model/color.js";
export class MainRenderer {
    constructor(context, board) {
        this.context = context;
        this.board = board;
    }
    draw() {
        this.context.fillStyle = "#ffffff";
        this.context.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        this.drawBoard();
        this.drawSelectedSquare();
        this.drawPossibleMoves();
        this.drawPieces();
        //this.debug();
    }
    drawBoard() {
        const squares = this.board.getSquares();
        for (let i = 0; i < BOARD_SIZE; i++) {
            for (let j = 0; j < BOARD_SIZE; j++) {
                const currentSquare = squares[i][j];
                this.context.fillStyle = (currentSquare.getColor() === Color.BLACK) ? BLACK_SQUARE_COLOR : WHITE_SQUARE_COLOR;
                this.context.fillRect(j * SQUARE_SIZE, i * SQUARE_SIZE, SQUARE_SIZE, SQUARE_SIZE);
            }
        }
    }
    drawPieces() {
        for (const piece of this.board.getPieces())
            this.drawPiece(piece);
    }
    drawSelectedSquare() {
        const selectedSquare = this.board.getSelectedSquare();
        if (!selectedSquare)
            return;
        this.context.fillStyle = SELECTED_COLOR;
        const position = selectedSquare.getPosition();
        this.context.fillRect(position.x * SQUARE_SIZE, position.y * SQUARE_SIZE, SQUARE_SIZE, SQUARE_SIZE);
    }
    drawPossibleMoves() {
        const possibleMoves = this.board.getCurrentValidPositions();
        for (const position of possibleMoves) {
            this.context.fillStyle = POSSIBLE_POSITIONS_COLOR;
            this.context.fillRect(position.x * SQUARE_SIZE, position.y * SQUARE_SIZE, SQUARE_SIZE, SQUARE_SIZE);
        }
    }
    drawPiece(piece, size = FONT_SIZE, color = undefined) {
        const position = piece.getPosition();
        this.context.fillStyle = (piece.getColor() === Color.BLACK) ? '#000000' : '#FFFFFF';
        if (color)
            this.context.fillStyle = color;
        this.context.font = size;
        this.context.fillText(piece.getSymbol(), (position.x + 0.1) * SQUARE_SIZE, (position.y + 0.9) * SQUARE_SIZE);
    }
    debug() {
        const squares = this.board.getSquares();
        for (const row of squares) {
            for (const square of row)
                if (square.getPiece())
                    this.drawPiece(square.getPiece(), DEBUG_FONT_SIZE, '#00FF00');
        }
    }
}
