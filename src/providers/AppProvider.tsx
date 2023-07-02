import * as React from "react";
import AppContext from "../contexts/AppContext";

interface IProvider {
    children: any
}

export default function AppProvider(props: IProvider): React.ReactElement {
    const { children } = props;
    const [player1, setPlayer1] = React.useState('L');
    const [player2, setPlayer2] = React.useState('M');
    const [victory, setVictory] = React.useState('');
    const [score, setScore] = React.useState({ X: 0, O: 0, draws: 0 });
    const [stopPlaying, setStopPlaying] = React.useState(false);

    const object = {
        player1, setPlayer1, // JOGADOR 1
        player2, setPlayer2, // JOGADOR 2
        victory, setVictory, // JOGADOR VENCEDOR
        score, setScore , // PLACAR
        stopPlaying, setStopPlaying, // BLOQUEAR O JOGO QUANDO HOUVER VITORIA OU TODAS AS CASAS MARCADAS
    }

    // Se não tiver nenhuma operação a ser realizada, você pode remover o useEffect
    // React.useEffect(() => { })

    return (
        <AppContext.Provider value={object}>
            {children}
        </AppContext.Provider>
    );
}
