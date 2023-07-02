import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';

import AppContext from '../../contexts/AppContext';

import './_participatingPeople.sass';

export default function ParticipatingPeople() {
  const {player1, setPlayer1} = React.useContext(AppContext)
  const {player2, setPlayer2} = React.useContext(AppContext)

  console.log("PLAYER 1 É", player1)
  console.log("PLAYER 2 É", player2)
  return (
    <Box id="playersHeader" /* sx={{ '& > :not(style)': { m: 1 } }} */>
      <div className='divPlayer1'>
        <AccountCircle
          // sx={{ color: '#fff', mr: 1, my: 0.5 }}
        />
        <TextField onChange={(e:any) => setPlayer1(e.target.value)} id="input-with-sx1" label="Player X" variant="standard" />
      </div>
      <div className='divPlayer2'>
        <AccountCircle
          // sx={{ color: '#fff', mr: 1, my: 0.5 }}
        />
        <TextField onChange={(e:any) => setPlayer2(e.target.value)} id="input-with-sx2" label="Player O" variant="standard" />
      </div>
    </Box>
  );
}