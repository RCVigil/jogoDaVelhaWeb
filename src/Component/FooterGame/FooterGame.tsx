import React from "react";
import AppContext from "../../contexts/AppContext";

export default function FooterGame() {
  const { victory, player1, player2, score } = React.useContext(AppContext);
  return (
    <div>
      {victory !== "" ? (
        <h1>{`Parabéns ${victory}, você venceu a partida`}</h1>
      ) : (
        <div className="footerScoreBoard">
          <h3>Quem vai ser o melhor da velha?</h3>
          <div>{!player1 ? "" : `${player1}: ${score.X}`}</div>
          <div>{!player2 ? "" : `${player2}: ${score.O}`}</div>
          <div>Total de partidas: {score.draws}</div>
        </div>
      )}
    </div>
  );
}
