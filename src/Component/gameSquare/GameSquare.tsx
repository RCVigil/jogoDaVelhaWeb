import React, { useContext, useState } from "react";
import "./_gameSquare.sass";
import AppContext from "../../contexts/AppContext";

export const GameSquare: React.FC = () => {
  const {
    player1,
    player2,
    setVictory,
    setScore,
    stopPlaying,
    setStopPlaying,
    cells,
    setCells,
    winningCells,
    setWinningCells,
  } = useContext(AppContext);
  const numRows = 3;
  const numCols = 3;

  console.log(cells);
  const [xIsNext, setXIsNext] = useState<boolean>(true);
  console.log(xIsNext);
  const [victoryGame] = useState<Array<Array<number>>>([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 5, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [3, 5, 7],
  ]);

  const rows = Array.from({ length: numRows });
  const cols = Array.from({ length: numCols });

  const checkWinner = (): "X" | "O" | "draw" | null => {
    for (let i = 0; i < victoryGame.length; i++) {
      const [a, b, c] = victoryGame[i];
      if (
        cells[a - 1] &&
        cells[a - 1] === cells[b - 1] &&
        cells[a - 1] === cells[c - 1]
      ) {
        setWinningCells([a, b, c]); // Aqui nós armazenamos a sequência vencedora
        return cells[a - 1] as "X" | "O";
      }
    }
    if (!cells.includes(null)) {
      return "draw";
    }
    return null;
  };

  React.useEffect(() => {
    const winner = checkWinner();
    if (winner) {
      updateScore(winner === "draw" ? "draws" : winner);
      setStopPlaying(true); // Definir stopPlaying como true quando houver um vencedor ou empate
    }
  }, [cells]); // Monitorando as mudanças no estado das cells

  const updateScore = (winner: "X" | "O" | "draws") => {
    setScore((prevScore: { [x: string]: number }) => ({
      ...prevScore,
      [winner]: prevScore[winner] + 1,
    }));
    if (winner === "X") {
      setVictory(player1);
    } else if (winner === "O") {
      setVictory(player2);
    } else if (winner === "draws") {
      setVictory("draw");
    }
  };

  const selectSquare = (e: React.MouseEvent<HTMLTableDataCellElement>) => {
    if (stopPlaying) {
      return; // Se stopPlaying for verdadeiro, retornar sem fazer alterações
    }

    const cellKey = Number(e.currentTarget.dataset.cellKey);

    if (cells[cellKey - 1] === null) {
      const newCells = [...cells];
      newCells[cellKey - 1] = xIsNext ? "X" : "O";
      setCells(newCells);

      setXIsNext(!xIsNext);
    }
  };

  return player2 !== "" && player1 !== "" ? (
    <div>
      <table id="firstDivGameSquare">
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
                      winningCells?.includes(cellKey) // Se a célula for parte da sequência vencedora...
                      ? "tdGameS winning"
                      : cellKey === 5
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
    </div>
  ) : (
    <div className="firstDivGameSquareH1">
      <h1 className="h1Names">Por favor digite o nome dos jogadores.</h1>
    </div>
  );
};
