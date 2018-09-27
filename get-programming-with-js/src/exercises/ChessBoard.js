/*
Write a program that creates a string that represents an 8 × 8 grid, using newline characters to separate lines.
 At each position of the grid there is either a space or a “#” character. The characters should form a chess board.
*/

export default function createChessBoard(size) {
    const board = new Array(size);
    for (let i = 0; i < board.length; i++) {
        board[i] = createBoardRow(i, size);
    }
    return board;
}

export function createOddChessBoardRow(size) {

    function generateChar(position) {
        return (isOddRow(position)) ? '#' : ' ';
    }

    return fillBoardRow(generateChar, size);
}

export function createEvenChessBoardRow(size) {

    function generateChar(position) {
        return (isOddRow(position)) ? ' ' : '#';
    }

    return fillBoardRow(generateChar, size);
}


function createBoardRow(position, size) {
    return (isOddRow(position)) ? createOddChessBoardRow(size) : createEvenChessBoardRow(size);
}

function isOddRow(position) {
    return position % 2 === 0;
}

function fillBoardRow(generateChar, size) {
    let row = "";

    for (let i = 0; i < size; i++) {
        row += generateChar(i);
    }

    return row;
}

function main(size) {
    const board = createChessBoard(size);
    for (let i = 0; i < board.length; i++) {
        console.log(board[i]);
    }
}

if (require.main === module) {
    main(8);
    console.log("------------------------------------------");
    main(1);
    console.log("------------------------------------------");
    main(2);
    console.log("------------------------------------------");
    main(3);
    console.log("------------------------------------------");
    main(4);
}