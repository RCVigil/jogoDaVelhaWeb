import * as React from "react";
import AppContext from "../contexts/AppContext";

interface IProvider {
    children: any
}

export default function AppProvider(props: IProvider): React.ReactElement {
    const { children } = props;
    const [player1, setPlayer1] = React.useState('');
    // const [player1, setPlayer1] = React.useState('');
    const [player2, setPlayer2] = React.useState('');
    // const [player2, setPlayer2] = React.useState('');

    const object = {
        player1, setPlayer1, // JOGADOR 1
        player2, setPlayer2, // JOGADOR 2
    }

    // Se não tiver nenhuma operação a ser realizada, você pode remover o useEffect
    // React.useEffect(() => { })

    return (
        <AppContext.Provider value={object}>
            {children}
        </AppContext.Provider>
    );
}
