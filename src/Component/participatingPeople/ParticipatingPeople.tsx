import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import ClearIcon from "@mui/icons-material/Clear";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";

import AppContext from "../../contexts/AppContext";

import "./_participatingPeople.sass";

// Componente ParticipatingPeople que exibe um ou dois campos de entrada para os jogadores.
export default function ParticipatingPeople() {
  // Obtém os valores dos jogadores e funções de atualização do contexto global do aplicativo.
  const { player1, setPlayer1, player2, setPlayer2, selectDifficulty } =
    React.useContext(AppContext);

  return (
    <Box id="playersHeader">
      {!selectDifficulty ? (
        // Renderizar dois jogadores
        <>
          <div className="divPlayer1">
            <ClearIcon sx={{ color: "blue", fontWeight: "700" }} />
            <TextField
              value={player1}
              onChange={(e: any) => setPlayer1(e.target.value)}
              id="input-with-sx1"
              label="Player 1"
              sx={{
                color: "#ffffff",
                label: {
                  color: "blue",
                  fontSize: "1.5vh",
                  textAlign: "center",
                  fontWeight: "800",
                  display: "flex",
                  alignSelf: "center",
                },
              }}
              variant="standard"
            />
          </div>
          <div className="divPlayer2">
            <TextField
              value={player2}
              onChange={(e: any) => setPlayer2(e.target.value)}
              id="input-with-sx2"
              label="Player 2"
              variant="standard"
              sx={{
                color: "#ffffff",
                label: {
                  color: "red",
                  fontSize: "1.5vh",
                  textAlign: "end",
                  fontWeight: "800",
                  width: "100%",
                },
              }}
            />
            <CircleOutlinedIcon sx={{ color: "red", fontWeight: "700" }} />
          </div>
        </>
      ) : (
        // Renderizar apenas um jogador
        <div className="divPlayer1">
          <ClearIcon sx={{ color: "blue", fontWeight: "700" }} />
          <TextField
            value={player1}
            onChange={(e: any) => setPlayer1(e.target.value)}
            id="input-with-sx1"
            label="Player 1"
            sx={{
              color: "#ffffff",
              label: {
                color: "blue",
                fontSize: "1.5vh",
                textAlign: "center",
                fontWeight: "800",
                display: "flex",
                alignSelf: "center",
              },
            }}
            variant="standard"
          />
        </div>
      )}
    </Box>
  );
}
