import * as React from "react";
import ParticipatingPeople from "../../Component/participatingPeople/ParticipatingPeople";
import { GameSquare } from "../../Component/gameSquare/GameSquare";
import FooterGame from "../../Component/FooterGame/FooterGame";

import "./_renderingWith1Player.sass";

const RenderingWith1Player: React.FC = () => (
  <div id="firstDivGamePST">
    <header id="headerParticipatingPST">
      <ParticipatingPeople />
    </header>
    <hr className="lineDivisoryPST" />
    <main id="bodyGamePST">
      <GameSquare />
    </main>
    <hr className="lineDivisoryFooterPST" />
    <footer id="footerGamePST">
      <FooterGame />
    </footer>
  </div>
);

export default RenderingWith1Player;
