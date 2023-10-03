// import React from "react";
import { Link } from "react-router-dom";

import { Button, Stack } from "@mui/material";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import ComputerIcon from "@mui/icons-material/Computer";

import "./style/_app.sass";

export default function App() {
  return (
    <>
      <Stack direction="row" spacing={32} id="firstDivGame">
        <Link to="onePerson">
          <Button
            variant="contained"
            startIcon={<EmojiPeopleIcon />}
            endIcon={<ComputerIcon />}
            color="primary"
          >
            Pessoa X Boot
          </Button>
        </Link>
        <Link to="twoPerson">
          <Button
            variant="contained"
            startIcon={<EmojiPeopleIcon />}
            endIcon={<EmojiPeopleIcon />}
            color="success"
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
        Modulo contra computador (Boot) está em construção
      </h1>
    </>
  );
}
