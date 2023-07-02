import React, { useState } from "react";

import "./_gameSquare.sass";
import AppContext from "../../contexts/AppContext";

export const GameSquare: React.FC = () => {
  const {player1} = React.useContext(AppContext)
  const {player2} = React.useContext(AppContext)

  const numRows = 3;
  const numCols = 3;

  const initialCells = Array(numRows * numCols).fill(null);
  const [cells, setCells] = useState(initialCells);
  const [xIsNext, setXIsNext] = useState(true);
  const [victoryGame, setVictoryGame] = useState([[1,2,3,], [4,5,6], [7,8,9], [1,5,9], [1,4,7], [2,5,8], [3,6,9], [3,5,7]]);

  console.log(cells)
  console.log(xIsNext)

  const rows = Array.from({ length: numRows });
  const cols = Array.from({ length: numCols });

  const selectSquare = (e:any) => {
    const cellKey = e.currentTarget.dataset.cellKey;

    if (cells[cellKey - 1] === null) {
      const newCells = [...cells];
      newCells[cellKey - 1] = xIsNext ? 'X' : 'O';
      setCells(newCells);
      setXIsNext(!xIsNext);
    }
  }

  return (
    (player2 !== '' && player1 !== '') ? 
    (<table id="firstDivGameSquare">
      <tbody>
        {rows.map((_, r) => (
          <tr key={r + 1}>
            {cols.map((_, c) => {
              const cellKey = r * numCols + c + 1;
              return (
                <td
                  key={cellKey}
                  data-cell-key={cellKey}
                  onClick={selectSquare}
                  className={
                    cellKey === 5
                      ? "tdGameS square5"
                      : cellKey === 2 || cellKey === 8
                      ? "tdGameS square28"
                      : cellKey === 4 || cellKey === 6
                      ? "tdGameS square46"
                      : "tdGameS"
                  }
                >
                  <p className="h1XO">{cells[cellKey - 1]}</p>
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  )
  : (
    <div className="firstDivGameSquareH1">
      <h1 className="h1Names">Por favor digite o nome dos jogadores.</h1>
    </div>
  )
  )
};
