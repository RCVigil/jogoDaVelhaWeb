import { useContext } from "react";
import AppContext from "../contexts/AppContext";

import "./_playing.sass";

export function PlayingX() {
  const { player1 } = useContext(AppContext);
  return (
    <div className="gamerX firstDivGamer">
      <p className="pGamerActive gamerX">
        É a vez de <strong>{player1}</strong> jogar.
      </p>
    </div>
  );
}

export function PlayingO() {
  const { player2 } = useContext(AppContext);
  return (
    <div className="gamerO firstDivGamer">
      <p className="pGamerActive gamerO">
        É a vez de <strong>{player2}</strong> jogar.
      </p>
    </div>
  );
}
