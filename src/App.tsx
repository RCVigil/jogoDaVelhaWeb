// import React from 'react'
import FooterGame from './Component/FooterGame/FooterGame';
import { GameSquare } from './Component/gameSquare/GameSquare';
import ParticipatingPeople from './Component/participatingPeople/ParticipatingPeople';
import PlayingSelectorOne from './Pages/PlayingSelector/PlayingSelectorOne';
import PlayingSlelctorTwo from './Pages/PlayingSelector/PlayingSlelctorTwo';
import AppProvider from './providers/AppProvider';

import './style/_app.sass';

export default function App() {
  return (
      <div id="firstDivGame">
        {/* <header id="headerParticipating">
          <ParticipatingPeople />
        </header>
        <hr className="lineDivisory" />
        <main id="bodyGame">
          <GameSquare />
        </main>
        <hr className="lineDivisoryFooter" />
        <footer id="footerGame">
          <FooterGame />
        </footer> */}
        <PlayingSelectorOne/>
        <PlayingSlelctorTwo/>
      </div>
  );
}
