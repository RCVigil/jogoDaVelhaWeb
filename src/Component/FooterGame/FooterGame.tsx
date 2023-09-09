import React from "react";
import AppContext from "../../contexts/AppContext";

import "./_footerGame.sass";
import AlertDialogSlide from "../../utils/AlertDialogFinished";

export default function FooterGame() {
  const {
    victory,
    setVictory,
    player1,
    player2,
    score,
    setNextGame,
    setStopPlaying,
    stopPlaying,
    setCells,
    setWinningCells,
  } = React.useContext(AppContext);

  const setNextGameButton = () => {
    setNextGame(true);
    setCells([null, null, null, null, null, null, null, null, null]);
    setVictory("");
    setWinningCells();
    setStopPlaying(false);
  };

  return (
    <div id="footerDivFirst">
      {victory !== "" ? (
        <div className="footerScoreBoard">
          <h1 className="victoryFooter">{`Parabéns ${victory}, você venceu esta rodada!`}</h1>
          <div className="buttonFooter">
            {stopPlaying && <AlertDialogSlide />}
            {stopPlaying && (
              <button className="buttonNextGame" onClick={setNextGameButton}>
                Próxima Partida
              </button>
            )}
          </div>
          <div className="placarFooter">
            {score.X === score.O ? (
              <div>Velha: {score.draws}</div>
            ) : score.X > score.O ? (
              score.X === score.O
            ) : (
              <div>{!player2 ? "" : `${player2}: ${score.O}`}</div>
            )}
          </div>
        </div>
      ) : (
        <div className="footerScoreBoard">
          <h3>Quem vai ser o melhor da velha?</h3>
          <div className="placarFooter">
            <div>{!player1 ? "" : `${player1}: ${score.X}`}</div>
            <div>Velha: {score.draws}</div>
            <div>{!player2 ? "" : `${player2}: ${score.O}`}</div>
          </div>
        </div>
      )}
    </div>
  );
}
