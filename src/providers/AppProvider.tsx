import * as React from "react";
import AppContext from "../contexts/AppContext";

interface IProvider {
  children: any;
}

export default function AppProvider(props: IProvider): React.ReactElement {
  const { children } = props;

  const [selectDifficulty, setSelectDifficulty] = React.useState("easy");
  {
    console.log("selectDifficulty no Provider =", selectDifficulty);
  }

  const [player1, setPlayer1] = React.useState("");
  // const [player1, setPlayer1] = React.useState("Rodrigo");
  // {console.log("Player 1 no Provider =", player1)}

  const [player2, setPlayer2] = React.useState("");
  // {console.log("Player 2 no Provider =", player2)}

  const [victory, setVictory] = React.useState("");
  {
    console.log("Victory no Provider =", victory);
  }

  const [score, setScore] = React.useState({ X: 0, O: 0, draws: 0 });
  // {console.log("score no Provider =", score)}

  const [stopPlaying, setStopPlaying] = React.useState(false);
  // {console.log("stopPlaying no Provider =", stopPlaying)}

  const [resetGame, setResetGame] = React.useState(false);
  // {console.log("resetGame no Provider =", resetGame)}

  const [nextGame, setNextGame] = React.useState(false);
  // {console.log("nextGame no Provider =", nextGame)}

  const [winningCells, setWinningCells] = React.useState<Array<number>>();
  // {console.log("winningCells no Provider =", winningCells)}

  const [xIsNext, setXIsNext] = React.useState<boolean>(false);
  // { console.log('xIsNext no Provider =', xIsNext); }

  const numRows = 3;
  const numCols = 3;

  const initialCells = Array(numRows * numCols).fill(null);
  const [cells, setCells] = React.useState<Array<string | null>>(initialCells);
  // { console.log('cells no Provider =', cells); }

  const object = {
    player1,
    setPlayer1, // JOGADOR 1
    player2,
    setPlayer2, // JOGADOR 2
    victory,
    setVictory, // JOGADOR VENCEDOR
    score,
    setScore, // PLACAR
    stopPlaying,
    setStopPlaying, // BLOQUEAR O JOGO QUANDO HOUVER VITORIA OU TODAS AS CASAS MARCADAS
    resetGame,
    setResetGame, // REINICIAR O JOGO COM NOVOS JOGADORES
    nextGame,
    setNextGame, // PRÓXIMA PARTIDA COM MESMOS JOGADORES
    cells,
    setCells, // ARMAZENA OS ESPAÇOS CLICADOS
    winningCells,
    setWinningCells, // SEQUENCIA VITORIOSA
    xIsNext,
    setXIsNext, // Boolean se o X é o proximo a jogar ou nao
    selectDifficulty,
    setSelectDifficulty, // variável que armazena a dificuldade escolhida no jogo contra o Boot
  };

  // Se não tiver nenhuma operação a ser realizada, você pode remover o useEffect
  // React.useEffect(() => { })

  return <AppContext.Provider value={object}>{children}</AppContext.Provider>;
}
