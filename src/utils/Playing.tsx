import { AlertTitle } from "@mui/material";
import { useContext } from "react";
import AppContext from "../contexts/AppContext";

import "./_playing.sass";

export function PlayingX() {
  const { player1 } = useContext(AppContext);
  return (
    <div className="gamerX firstDivGamer">
      <AlertTitle sx={{ fontSize: "5vw", fontWeight: "600" }}>
        É a vez de:{" "}
      </AlertTitle>
      <br />
      <p className="pGamerActive gamerX">
        <strong>{player1}</strong> jogar.
      </p>
    </div>
  );
}

export function PlayingO() {
  const { player2 } = useContext(AppContext);
  return (
    <div className="gamerO firstDivGamer">
      <AlertTitle sx={{ fontSize: "5vw", fontWeight: "600" }}>
        É a vez de{" "}
      </AlertTitle>
      <br />
      <p className="pGamerActive gamerO">
        <strong>{player2}</strong> jogar.
      </p>
    </div>
  );
}
