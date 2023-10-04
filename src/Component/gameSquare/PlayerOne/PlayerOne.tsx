import React from "react";
import AppContext from "../../../contexts/AppContext";
import { PlayingO, PlayingX } from "../../../utils/Playing";
import BotLogic from "../../../Component/BootLogic/BootLogic";

const PlayerOne = () => {
  // Obtém valores do contexto global do aplicativo.
  const {
    player1,
    player2,
    setVictory,
    victory,
    setScore,
    stopPlaying,
    setStopPlaying,
    cells,
    setCells,
    winningCells,
    setWinningCells,
    xIsNext,
    setXIsNext,
    selectDifficulty,
  } = React.useContext(AppContext);

  const numRows = 3;
  const numCols = 3;

  // Possíveis combinações vencedoras em um jogo da velha.
  const [victoryGame] = React.useState<Array<Array<number>>>([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 5, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [3, 5, 7],
  ]);

  // Gera arrays para representar as linhas e colunas do tabuleiro.
  const rows = Array.from({ length: numRows });
  const cols = Array.from({ length: numCols });

  // Função para verificar o vencedor do jogo.
  const checkWinner = (): "X" | "O" | "draw" | null => {
    for (let i = 0; i < victoryGame.length; i++) {
      const [a, b, c] = victoryGame[i];
      if (
        cells[a - 1] &&
        cells[a - 1] === cells[b - 1] &&
        cells[a - 1] === cells[c - 1]
      ) {
        setWinningCells([a, b, c]); // Armazena a sequência vencedora.
        return cells[a - 1] as "X" | "O";
      }
    }
    if (!cells.includes(null)) {
      return "draw";
    }
    return null;
  };

  // Efeito que verifica o vencedor ou empate quando as células mudam.
  React.useEffect(() => {
    const winner = checkWinner();
    if (winner) {
      updateScore(winner === "draw" ? "draws" : winner);
      setStopPlaying(true); // Define stopPlaying como true quando há um vencedor ou empate.
    }
  }, [cells]);

  // Atualiza o placar e define o vencedor após o término do jogo.
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

  // Função para selecionar uma célula do tabuleiro.
  const selectSquare = (e: React.MouseEvent<HTMLTableDataCellElement>) => {
    if (stopPlaying || victory) {
      return; // Se stopPlaying for verdadeiro, retorna sem fazer alterações.
    }

    const cellKey = Number(e.currentTarget.dataset.cellKey);

    if (cells[cellKey - 1] === null) {
      const newCells = [...cells];
      newCells[cellKey - 1] = "X";
      console.log(newCells);
      setCells(newCells);

      setXIsNext(!xIsNext);

      if (!victory) {
        const botMove = BotLogic(selectDifficulty, newCells, victory); // Chame a função BotLogic
        console.log(botMove);

        setXIsNext(!xIsNext);
        // Atualize o array cells com a jogada do computador ('O')
        const updatedCells = [...newCells];
        updatedCells[botMove - 1] = "O";
        console.log(updatedCells);
        setCells(updatedCells);
      }
    }
  };

  return player1 !== "" ? (
    // Renderiza o tabuleiro do jogo se os nomes dos jogadores estiverem definidos.
    <div className="layingActiveGS">
      <table id="firstDivGameSquare">
        <tbody>
          {rows.map((_, r) => (
            <tr key={r + 1} className="trGames">
              {cols.map((_, c) => {
                const cellKey = r * numCols + c + 1;
                const tdClassName = winningCells?.includes(cellKey)
                  ? `tdGames square${cellKey} winning`
                  : `tdGames square${cellKey}`;
                return (
                  <td
                    key={cellKey}
                    data-cell-key={cellKey}
                    onClick={selectSquare}
                    className={tdClassName}
                  >
                    <p className="h1XO">{cells[cellKey - 1]}</p>
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
      {!xIsNext ? <PlayingO /> : <PlayingX />}
    </div>
  ) : (
    // Exibe uma mensagem de digitação dos nomes dos jogadores se eles não estiverem definidos.
    <div className="firstDivGameSquareH1">
      <h1 className="h1Names">Por favor digite o nome do jogador</h1>
    </div>
  );
};

export default PlayerOne;
