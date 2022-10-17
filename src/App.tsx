import React, { useEffect, useState } from 'react';
import './App.scss';
import BoardComponent from './components/BoardComponent';
import LostFigures from './components/LostFigures';
import Timer from './components/Timer';
import { Board } from './models/Board';
import { Colors } from './models/Colors';
import { Player } from './models/Player';

const App: React.FC = () => {
  // создаем состояние доски
  const [board, setBoard] = useState<Board>(new Board());
  const [whitePlayer, setWhitePlayer] = useState<Player>(
    new Player(Colors.WHITE)
  );
  const [blackPlayer, setBlackPlayer] = useState<Player>(
    new Player(Colors.BLACK)
  );

  const [currentPlayer, setCurrentPlayer] = useState<Player | null>(null);

  // вызываем инициализацию доски при первом рендере страницы
  useEffect(() => {
    restart();
    setCurrentPlayer(whitePlayer);
  }, []);

  const restart = () => {
    // создаем новую доску и инициализируем её
    const newBoard = new Board();
    newBoard.initCells();
    newBoard.addFigures();
    setBoard(newBoard);
    setCurrentPlayer(whitePlayer);
  };

  const setCurrentPlayerFunction = () => {
    setCurrentPlayer(
      currentPlayer?.color === Colors.BLACK ? whitePlayer : blackPlayer
    );
  };
  return (
    <React.Fragment>
      <div className='app'>
        <Timer currentPlayer={currentPlayer} restart={restart} />
        <BoardComponent
          board={board}
          setBoard={setBoard}
          currentPlayer={currentPlayer}
          setCurrentPlayerFunction={setCurrentPlayerFunction}
        />
        <div>
          <LostFigures
            title='Lost black figures'
            figures={board.lostBlackFigure}
          />
          <LostFigures
            title='Lost white figures'
            figures={board.lostWhiteFigure}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default App;
