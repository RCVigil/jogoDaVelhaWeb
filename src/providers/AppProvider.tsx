import * as React from "react";
import AppContext from "../contexts/AppContext";

interface IProvider {
  children: any;
}

export default function AppProvider(props: IProvider): React.ReactElement {
  const { children } = props;
  const [player1, setPlayer1] = React.useState("");
  const [player2, setPlayer2] = React.useState("");
  const [victory, setVictory] = React.useState("");
  const [score, setScore] = React.useState({ X: 0, O: 0, draws: 0 });
  const [stopPlaying, setStopPlaying] = React.useState(false);
  const [resetGame, setResetGame] = React.useState(false);
  const [nextGame, setNextGame] = React.useState(false);

  const numRows = 3;
  const numCols = 3;

  const initialCells = Array(numRows * numCols).fill(null);
  const [cells, setCells] = React.useState<Array<string | null>>(initialCells);

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
    cells, setCells, // ARMAZENA OS ESPAÇOS CLICADOS
  };

  // Se não tiver nenhuma operação a ser realizada, você pode remover o useEffect
  // React.useEffect(() => { })

  return <AppContext.Provider value={object}>{children}</AppContext.Provider>;
}
