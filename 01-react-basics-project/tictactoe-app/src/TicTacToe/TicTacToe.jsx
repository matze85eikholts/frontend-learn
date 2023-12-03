import React from 'react';
import './TicTacToe.css';

const TicTacToe = () => {
  const Cell = () => {
    return <td onClick={() => handleClick()}>-</td>;
  };

  const handleClick = () => {
    alert('Ячейка была кликнута');
  };

  return (
    <div>
      <h1>Игра в крестики и нолики!</h1>
      <table>
        <tbody>
          <tr>
            <Cell />
            <Cell />
            <Cell />
          </tr>
          <tr>
            <Cell />
            <Cell />
            <Cell />
          </tr>
          <tr>
            <Cell />
            <Cell />
            <Cell />
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TicTacToe;
