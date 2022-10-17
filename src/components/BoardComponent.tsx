import React, { useEffect, useState } from 'react';
import '../App.scss';
import { Board } from '../models/Board';
import { Cell } from '../models/Cell';
import { Player } from '../models/Player';
import CellComponent from './CellComponent';

interface BoardProps {
  board: Board;
  setBoard: (board: Board) => void;
  currentPlayer: Player | null;
  setCurrentPlayerFunction: () => void;
}

const BoardComponent: React.FC<BoardProps> = ({
  board,
  setBoard,
  currentPlayer,
  setCurrentPlayerFunction,
}) => {
  const [selectedSell, setSelectedSell] = useState<Cell | null>(null);

  const onCellClick = (cell: Cell) => {
    if (
      selectedSell &&
      selectedSell !== cell &&
      selectedSell.figure?.canMove(cell)
    ) {
      selectedSell.moveFigure(cell);
      setSelectedSell(null);
      setCurrentPlayerFunction();
    } else {
      if (cell.figure?.color === currentPlayer?.color) {
        setSelectedSell(cell);
      }
    }
  };

  const highlightCells = () => {
    board.highlightCells(selectedSell);
    udateBoard();
  };

  const udateBoard = () => {
    const newBoard = board.getCopyBoard();
    setBoard(newBoard);
  };

  useEffect(() => {
    highlightCells();
  }, [selectedSell]);

  return (
    <div>
      <h3>Current player move: {currentPlayer?.color}</h3>
      <div className='board'>
        {board.cells.map((row, i) => (
          <React.Fragment key={i}>
            {row.map((cell) => (
              <CellComponent
                click={onCellClick}
                cell={cell}
                key={cell.id}
                selected={
                  cell.x === selectedSell?.x && cell.y === selectedSell?.y
                }
              />
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default BoardComponent;
