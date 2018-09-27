import createChessBoard, {createEvenChessBoardRow, createOddChessBoardRow} from "./ChessBoard";
import * as chai from 'chai';

describe("ChessBoard",()=>{


    it("should return array 8x8",()=>{
        function verifyThatEachRowHasProperFormat(board) {
            for (let i = 0; i < board.length; i++) {
                if(i%2===0) {
                    chai.expect(board[i]).to.be.equal("# # # # ");
                } else {
                    chai.expect(board[i]).to.be.equal(" # # # #");
                }
            }
        }

        let SIZE = 8;
        const board = createChessBoard(SIZE);

        chai.expect(board.length).to.be.equal(SIZE);
        verifyThatEachRowHasProperFormat(board);
    });

    it("should create odd chess board row in N size",() =>{
        chai.expect(createOddChessBoardRow(0)).to.be.equal('');
        chai.expect(createOddChessBoardRow(1)).to.be.equal('#');
        chai.expect(createOddChessBoardRow(2)).to.be.equal('# ');
        chai.expect(createOddChessBoardRow(3)).to.be.equal('# #');
        chai.expect(createOddChessBoardRow(8)).to.be.equal('# # # # ');
    });

    it("should create even chess board row in N size",() =>{
        chai.expect(createEvenChessBoardRow(0)).to.be.equal('');
        chai.expect(createEvenChessBoardRow(1)).to.be.equal(' ');
        chai.expect(createEvenChessBoardRow(2)).to.be.equal(' #');
        chai.expect(createEvenChessBoardRow(3)).to.be.equal(' # ');
        chai.expect(createEvenChessBoardRow(8)).to.be.equal(' # # # #');
    });
});