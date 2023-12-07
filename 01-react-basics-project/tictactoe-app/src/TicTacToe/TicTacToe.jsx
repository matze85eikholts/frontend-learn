import React, { useState } from 'react';
import './TicTacToe.css';

const TicTacToe = () => {
  const [turn, setTurn] = useState('x');
  const [cells, setCells] = useState(Array(9).fill(''));
  const Cell = ({ num }) => {
    return <td onClick={() => handleClick(num)}>{cells[num]}</td>;
  };

  const checkTheWinner = (squars) => {
    let combos = {
      positions: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
      ],
      down: [
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
      ],
      diagonal: [
        [0, 4, 8],
        [2, 4, 6],
      ],
    };
  };
  const handleClick = (num) => {
    //alert(num);
    if (cells[num] != '') {
      alert('уже было кликнуто!'); // Защита от двойного клика
      return;
    }
    let squars = [...cells];
    if (turn === 'x') {
      squars[num] = 'x';
      setTurn('0');
    } else {
      squars[num] = '0';
      setTurn('x');
    }
    setCells(squars);
  };

  return (
    <div>
      <h1>Игра в крестики и нолики!</h1>
      <table>
        Turn: {turn}
        <tbody>
          <tr>
            <Cell num={0} />
            <Cell num={1} />
            <Cell num={2} />
          </tr>
          <tr>
            <Cell num={3} />
            <Cell num={4} />
            <Cell num={5} />
          </tr>
          <tr>
            <Cell num={6} />
            <Cell num={7} />
            <Cell num={8} />
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TicTacToe;
