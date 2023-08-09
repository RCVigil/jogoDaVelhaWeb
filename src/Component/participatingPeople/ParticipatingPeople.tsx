import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import ClearIcon from "@mui/icons-material/Clear";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";

import AppContext from "../../contexts/AppContext";

import "./_participatingPeople.sass";

// Componente ParticipatingPeople que exibe dois campos de entrada para os jogadores.
export default function ParticipatingPeople() {
  // Obtém os valores dos jogadores e funções de atualização do contexto global do aplicativo.
  const { player1, setPlayer1, player2, setPlayer2 } =
    React.useContext(AppContext);

  return (
    // Componente de contêiner para os campos de entrada dos jogadores.
    <Box id="playersHeader" /* sx={{ '& > :not(style)': { m: 1 } }} */>
      {/* Div para o jogador 1 */}
      <div className="divPlayer1">
        <ClearIcon
        // Ícone do jogador 1 que é o X.
        />
        <TextField
          // Valor do jogador 1 exibido no campo de entrada.
          value={player1}
          // Função de chamada quando o valor do jogador 1 é alterado.
          onChange={(e: any) => setPlayer1(e.target.value)}
          id="input-with-sx1"
          // Rótulo para o campo de entrada do jogador 1.
          label="Player 1"
          // Variante do campo de entrada.
          variant="standard"
        />
      </div>
      {/* Div para o jogador 2 */}
      <div className="divPlayer2">
        <CircleOutlinedIcon
        // Ícone de círculo para o jogador 2.
        />
        <TextField
          // Valor do jogador 2 exibido no campo de entrada.
          value={player2}
          // Função de chamada quando o valor do jogador 2 é alterado.
          onChange={(e: any) => setPlayer2(e.target.value)}
          id="input-with-sx2"
          // Rótulo para o campo de entrada do jogador 2.
          label="Player 2"
          // Variante do campo de entrada.
          variant="standard"
        />
      </div>
    </Box>
  );
}
