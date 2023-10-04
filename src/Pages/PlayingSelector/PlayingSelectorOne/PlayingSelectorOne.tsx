import * as React from "react";
import {
  Button,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Paper,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";

import "./_playingSelectorOne.sass";
// eslint-disable-next-line import/extensions
import { Link } from "react-router-dom";
import AppContext from "../../../contexts/AppContext";

const PlayingSelectorOne: React.FC = () => {
  const { selectDifficulty, setSelectDifficulty } =
    React.useContext(AppContext);

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectDifficulty((event.target as HTMLInputElement).value);
  };

  return (
    <Paper
      sx={{
        backgroundColor: "transparent",
        display: "flex",
        height: "70%",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <FormControl id="firstDivGamePSO">
        <FormLabel id="demo-row-radio-buttons-group-label">
          <Typography
            variant="h1"
            color="black"
            sx={{ textShadow: "2px 4px 4px white" }}
          >
            Selecione a Dificuldade
          </Typography>
        </FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
          onChange={handleRadioChange}
        >
          <FormControlLabel
            sx={{
              color: "blue",
              marginRight: "10vw",
              "& .MuiTypography-root": {
                fontSize: "2rem",
                fontWeight: "900",
                textShadow: "2px 4px 4px black",
                background: "rgba(255, 255, 0, 0.5)",
                padding: "0 15px",
                borderRadius: "10px",
                boxShadow: "10px 10px 20px 0 rgba(255, 255, 255, 1)",
              },
              "& .MuiRadio-root": { color: "gold" },
            }}
            value="easy"
            autoFocus={true}
            control={<Radio />}
            label="Fácil"
          />
          <FormControlLabel
            value="middle"
            autoFocus={true}
            control={<Radio />}
            label="Intermediário"
            sx={{
              color: "green",
              marginRight: "10vw",
              "& .MuiTypography-root": {
                fontSize: "2rem",
                fontWeight: "900",
                textShadow: "2px 4px 4px black",
                background: "rgba(255, 255, 0, 0.5)",
                padding: "0 15px",
                borderRadius: "10px",
                boxShadow: "10px 10px 20px 0 rgba(255, 255, 255, 1)",
              },
              "& .MuiRadio-root": { color: "gold" },
            }}
          />
          <FormControlLabel
            value="hard"
            autoFocus={true}
            control={<Radio />}
            label="Difícil"
            sx={{
              color: "red",
              "& .MuiTypography-root": {
                fontSize: "2rem",
                fontWeight: "900",
                textShadow: "2px 4px 4px black",
                background: "rgba(255, 255, 0, 0.5)",
                padding: "0 15px",
                borderRadius: "10px",
                boxShadow: "10px 10px 20px 0 rgba(255, 255, 255, 1)",
              },
              "& .MuiRadio-root": { color: "gold" },
            }}
          />
        </RadioGroup>
        <FormHelperText
          sx={{
            paddingTop: "30px",
            fontSize: "1.5rem",
            textShadow: "2px 2px 6px orange",
            fontWeight: "700",
            textTransform: "capitalize",
          }}
        >
          {" "}
          Selecione a dificuldade para liberar o botão de Jogar.
        </FormHelperText>
      </FormControl>
      <Link
        to={`${selectDifficulty}`}
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.3)",
          bottom: "15vh",
          display: "flex",
          textDecoration: "none",
          position: "relative",
          width: "40%",
        }}
      >
        <Button
          variant="outlined"
          disabled={!selectDifficulty ? true : false}
          // onClick={disabledButton}
          sx={{
            color: "rgb(255, 255, 0)",
            fontSize: "2.5rem",
            fontWeight: "900",
            width: "100%",
          }}
        >
          Jogar
        </Button>
      </Link>
    </Paper>
  );
};

export default PlayingSelectorOne;
