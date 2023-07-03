// import React from "react";
// import AppContext from "../../contexts/AppContext";

// import './_footerGame.sass'

// export default function FooterGame() {
//   const { victory, player1, player2, score } = React.useContext(AppContext);
//   return (
//     <div id="footerDivFirst">
//       {victory !== "" ? (
//         <h1 className="victoryFooter">{`Parabéns ${victory}, você venceu a partida`}</h1>
//       ) : (
//         <div className="footerScoreBoard">
//           <h3>Quem vai ser o melhor da velha?</h3>
//           <div className="placarFooter">
//             <div>{!player1 ? "" : `${player1}: ${score.X}`}</div>
//             <div>Empate: {score.draws}</div>
//             <div>{!player2 ? "" : `${player2}: ${score.O}`}</div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

import React from "react";
import AppContext from "../../contexts/AppContext";

import './_footerGame.sass'

export default function FooterGame() {
  const { victory, player1, player2, score, nextGame, setNextGame, setResetGame, resetGame,setStopPlaying, stopPlaying, setCells } = React.useContext(AppContext);
  console.log(stopPlaying)
  
  console.log(resetGame)
  console.log(nextGame)

  const setNextGameButton = () => {
    setNextGame(true)
    setCells([null, null, null, null, null, null,null, null, null])
    setStopPlaying(false)
  }

  return (
    <div id="footerDivFirst">
      {victory !== "" ? (
        <h1 className="victoryFooter">{`Parabéns ${victory}, você venceu a partida`}</h1>
      ) : (
        <div className="footerScoreBoard">
          <h3>Quem vai ser o melhor da velha?</h3>
          <div className="placarFooter">
            <div>{!player1 ? "" : `${player1}: ${score.X}`}</div>
            <div>Empate: {score.draws}</div>
            <div>{!player2 ? "" : `${player2}: ${score.O}`}</div>
          </div>
          <div className="buttonFooter">
          {stopPlaying && <button onClick={() => setResetGame(true)}>Reiniciar o Jogo</button>}
          {stopPlaying && <button onClick={setNextGameButton}>Próxima Partida</button>}
          </div>
        </div>
      )}
    </div>
  );
}
