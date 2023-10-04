import React from "react";
import { Link } from "react-router-dom";

import { Button, Stack } from "@mui/material";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import ComputerIcon from "@mui/icons-material/Computer";

import "./style/_app.sass";
import AppContext from "./contexts/AppContext";

export default function App() {
  const { setSelectDifficulty } = React.useContext(AppContext);

  const renderOneaOne = () => setSelectDifficulty("");

  return (
    <>
      <Stack direction="row" id="firstDivGame">
        <Link to="onePerson" className="linkButAPP">
          <Button
            variant="contained"
            startIcon={<EmojiPeopleIcon />}
            endIcon={<ComputerIcon />}
            color="primary"
            className="buttonSelectionApp"
          >
            Pessoa X Boot
          </Button>
        </Link>
        <Link to="twoPerson" onClick={renderOneaOne} className="linkButAPP">
          <Button
            variant="contained"
            startIcon={<EmojiPeopleIcon />}
            endIcon={<EmojiPeopleIcon />}
            color="success"
            className="buttonSelectionApp"
          >
            Pessoa X Pessoa
          </Button>
        </Link>
      </Stack>
      <h1
        style={{
          color: "#090909",
          fontSize: "2.5rem",
          bottom: "13vh",
          boxShadow: "10px 0 10px rgba(255, 255, 255, 1)",
          position: "relative",
          textAlign: "center",
          width: "100%",
          textShadow: "2px 2px 4px rgba(255, 255, 0, 1)",
        }}
      >
        Modulo contra computador (Boot Fácil) está Funcionando
      </h1>
    </>
  );
}
