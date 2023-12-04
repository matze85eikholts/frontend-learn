import React, { useState } from 'react';
import './TicTacToe.css';

const TicTacToe = () => {
  const [turn, setTurn] = useState('x');
  const [cells, setCells] = useState(Array(9).fill(''));
  const Cell = ({ num }) => {
    return <td onClick={() => handleClick(num)}>-</td>;
  };

  const handleClick = (num) => {
    //alert(num);
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
