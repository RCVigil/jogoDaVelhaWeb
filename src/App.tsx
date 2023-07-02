// import React from 'react'
import { GameSquare } from "./Component/gameSquare/GameSquare";
import ParticipatingPeople from "./Component/participatingPeople/ParticipatingPeople";
import AppProvider from "./providers/AppProvider";

import "./style/_app.sass";

export default function App() {
  return (
    <AppProvider>
      <div id="firstDivGame">
        <header id="headerParticipating">
          <ParticipatingPeople />
        </header>
        <hr className="lineDivisory" />
        <div id="bodyGame">
          <GameSquare />
        </div>
        <hr className="lineDivisoryFooter" />
        <footer id="footerGame">oiiiiiiii</footer>
      </div>
    </AppProvider>
  );
}
