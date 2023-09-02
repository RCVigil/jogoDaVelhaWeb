import { AlertTitle } from "@mui/material";
import { useContext } from "react";
import AppContext from "../contexts/AppContext";

import ClearIcon from "@mui/icons-material/Clear";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";

const stylePlaying = {
  color: "#000",
  fontWeight: 600,
  marginLeft: "5vw",
};

export function PlayingX() {
  const { player1 } = useContext(AppContext);
  return (
    <div style={stylePlaying}>
      <AlertTitle>É a vez de: </AlertTitle>
      {/* <ClearIcon /> */}
      <br />
      <strong>{player1}</strong>
      <p>jogar.</p>
    </div>
  );
}

export function PlayingO() {
  const { player2 } = useContext(AppContext);
  return (
    <div style={stylePlaying}>
      <AlertTitle>É a vez de </AlertTitle>
      {/* <CircleOutlinedIcon /> */}
      <br />
      <strong>{player2}</strong>
      <p>jogar.</p>
    </div>
  );
}
