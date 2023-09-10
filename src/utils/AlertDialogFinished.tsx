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
      <Button
        variant="outlined"
        onClick={handleClickOpen}
        sx={{ height: "6vw", fontSize: "3vw" }}
      >
        Reiniciar o Jogo
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        sx={{
          height: "50vh",
          width: "50vw",
          position: "fixed",
          top: "25%",
          left: "25%",
        }}
      >
        <DialogTitle
          sx={{ fontSize: "2rem", color: "green", textAlign: "center" }}
        >
          {"Certeza que você quer Reiniciar a partida?"}
        </DialogTitle>
        <DialogContent sx={{ padding: "3vh" }}>
          <DialogContentText
            sx={{
              fontSize: "1.2rem",
              color: "purple",
              textAlign: "center",
              fontWeight: "700",
            }}
            id="alert-dialog-slide-description"
          >
            Esta ação irá zerar os nomes e placares.
          </DialogContentText>
        </DialogContent>
        <Typography variant="h5" sx={{ textAlign: "center" }}>
          {score.X === score.O ? (
            "Empate"
          ) : score.X > score.O ? (
            <Typography
              variant="body1"
              sx={{
                fontSize: "2rem",
                color: "blue",
                fontWeight: "700",
                textAlign: "center",
              }}
            >{`${player1} é o Ganhador com ${score.X} Vitórias`}</Typography>
          ) : (
            <Typography
              variant="body1"
              sx={{
                fontSize: "2rem",
                color: "red",
                fontWeight: "700",
                textAlign: "center",
              }}
            >{`${player2} é o Ganhador com ${score.O} Vitórias`}</Typography>
          )}
        </Typography>
        <DialogActions
          sx={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Button variant="outlined" onClick={handleClose}>
            Cancelar
          </Button>
          <Button
            sx={{ color: "red" }}
            variant="outlined"
            onClick={confirmationClose}
          >
            Reiniciar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
