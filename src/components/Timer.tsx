import { timeStamp } from 'console';
import React, { useEffect, useRef, useState } from 'react';
import { Colors } from '../models/Colors';
import { Player } from '../models/Player';

type Props = {
  currentPlayer: Player | null;
  restart: () => void;
};

const Timer: React.FC<Props> = ({ currentPlayer, restart }) => {
  const [blackTime, setBlackTime] = useState(300);
  const [whiteTime, setWhiteTime] = useState(300);

  const timer = useRef<null | ReturnType<typeof setInterval>>(null);

  const startTimer = () => {
    if (timer.current) {
      clearInterval(timer.current);
    }

    const callback =
      currentPlayer?.color === Colors.BLACK
        ? decrementBlackTimer
        : decrementWhiteTimer;
    timer.current = setInterval(callback, 1000);
  };

  const decrementBlackTimer = () => {
    setBlackTime((blackTime) => blackTime - 1);
    console.log(blackTime);
  };

  const decrementWhiteTimer = () => {
    setWhiteTime((whiteTime) => whiteTime - 1);
    console.log(whiteTime);
  };

  const handleRestart = () => {
    setWhiteTime(300);
    setBlackTime(300);
    restart();
  };

  useEffect(() => {
    startTimer();
  }, [currentPlayer]);
  return (
    <div>
      <div>
        <button onClick={handleRestart}>Reatart Game</button>
      </div>
      <h2>Black time: {blackTime}</h2>
      <h2>White time: {whiteTime}</h2>
    </div>
  );
};

export default Timer;
