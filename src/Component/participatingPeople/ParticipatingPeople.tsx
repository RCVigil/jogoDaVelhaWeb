import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import ClearIcon from '@mui/icons-material/Clear';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';

import AppContext from '../../contexts/AppContext';

import './_participatingPeople.sass';

export default function ParticipatingPeople() {
  const {player1, setPlayer1, player2, setPlayer2} = React.useContext(AppContext)

  console.log("PLAYER 1 É", player1)
  console.log("PLAYER 2 É", player2)
  return (
    <Box id="playersHeader" /* sx={{ '& > :not(style)': { m: 1 } }} */>
      <div className='divPlayer1'>
        <ClearIcon
          // sx={{ color: '#fff', mr: 1, my: 0.5 }}
        />
        <TextField value={player1} onChange={(e:any) => setPlayer1(e.target.value)} id="input-with-sx1" label="Player 1" variant="standard" />
      </div>
      <div className='divPlayer2'>
        <CircleOutlinedIcon
          // sx={{ color: '#fff', mr: 1, my: 0.5 }}
        />
        <TextField value={player2} onChange={(e:any) => setPlayer2(e.target.value)} id="input-with-sx2" label="Player 2" variant="standard" />
      </div>
    </Box>
  );
}