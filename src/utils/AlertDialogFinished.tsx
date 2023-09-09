import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import AppContext from "../contexts/AppContext";
import { Typography } from "@mui/material";

import "./_alertDialogFinished.sass";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide() {
  const {
    setVictory,
    player1,
    setPlayer1,
    player2,
    setPlayer2,
    score,
    setNextGame,
    setScore,
    setStopPlaying,
    setCells,
    setWinningCells,
  } = React.useContext(AppContext);

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const confirmationClose = () => {
    setNextGame(true);
    setCells([null, null, null, null, null, null, null, null, null]);
    setPlayer1("");
    setPlayer2("");
    setScore({ X: 0, O: 0, draws: 0 });
    setVictory("");
    setWinningCells();
    setStopPlaying(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Reiniciar o Jogo
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Certeza que vai Reiniciar a partida?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Esta ação irá zerar os nomes e placares.
          </DialogContentText>
        </DialogContent>
        <Typography variant="h5" sx={{ textAlign: "center" }}>
          {score.X === score.O
            ? "Empate"
            : score.X > score.O
            ? `${player1} é o Ganhador com ${score.X} Vitórias`
            : `${player2} é o Ganhador com ${score.O} Vitórias`}
        </Typography>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button onClick={confirmationClose}>Reiniciar</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
