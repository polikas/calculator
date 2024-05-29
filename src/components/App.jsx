import "../../styles/App.css";
import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useState, useEffect } from "react";
import { Button, Container, Typography } from "@mui/material";
import Footer from "./Footer";

const App = () => {
  const [firstNum, setFirstNum] = useState("0");
  const [firstNumForCalc, setFirstNumForCalc] = useState("0");
  const [secondNum, setSecondNum] = useState("0");
  const [secondNumForCalc, setSecondNumForCalc] = useState("0");
  const [totalSum, setTotalSum] = useState("0");
  const [totalSumForCalc, setTotalSumForCalc] = useState("0");
  const [operator, setOperator] = useState("");
  const [add, setAdd] = useState(false);
  const [sub, setSub] = useState(false);
  const [multi, setMulti] = useState(false);
  const [div, setDiv] = useState(false);

  useEffect(() => {
    const formattedFirstNum = Number(firstNumForCalc).toLocaleString();
    setFirstNum(formattedFirstNum);
    const formattedSecondNum = Number(secondNumForCalc).toLocaleString();
    setSecondNum(formattedSecondNum);
    const formattedTotalSum = Number(totalSumForCalc).toLocaleString();
    setTotalSumForCalc(formattedTotalSum);
  }, [firstNumForCalc, secondNumForCalc]);

  const zeroButton = () => numberButton("0");
  const oneButton = () => numberButton("1");
  const twoButton = () => numberButton("2");
  const threeButton = () => numberButton("3");
  const fourButton = () => numberButton("4");
  const fiveButton = () => numberButton("5");
  const sixButton = () => numberButton("6");
  const sevenButton = () => numberButton("7");
  const eightButton = () => numberButton("8");
  const nineButton = () => numberButton("9");

  const numberButton = (num) => {
    let newFirstSum = firstNumForCalc;
    let newSecondSum = secondNumForCalc;

    if (newFirstSum.charAt(0) === "0") {
      newFirstSum = newFirstSum.slice(1);
    }
    if (newSecondSum.charAt(0) === "0") {
      newSecondSum = newSecondSum.slice(1);
    }

    if (!add && !sub && !multi && !div) {
      setFirstNumForCalc(newFirstSum + num);
    } else {
      setSecondNumForCalc(newSecondSum + num);
    }
  };

  const additionButton = () => {
    setAdd(true);
    setOperator("+");
  };

  const substractionButton = () => {
    setSub(true);
    setOperator("-");
  };

  const multiButton = () => {
    setMulti(true);
    setOperator("*");
  };

  const divButton = () => {
    setDiv(true);
    setOperator("/");
  };

  const clearButton = () => {
    setFirstNumForCalc("0");
    setSecondNumForCalc("0");
    setAdd(false);
    setSub(false);
    setMulti(false);
    setDiv(false);
    setOperator("");
    setTotalSum("0");
  };

  const calclulateButton = () => {
    let num1 = Number(firstNumForCalc);
    let num2 = Number(secondNumForCalc);
    let result;

    if (add) {
      result = num1 + num2;
    }
    if (sub) {
      result = num1 - num2;
    }
    if (multi) {
      result = num1 * num2;
    }
    if (div) {
      result = num1 / num2;
    }
    setTotalSumForCalc(result);
    setTotalSum(result.toLocaleString());
    setFirstNumForCalc("0");
    setSecondNumForCalc("0");
    setAdd(false);
    setSub(false);
    setMulti(false);
    setDiv(false);
    setOperator("");
  };

  return (
    <div className="backgroundImg">
      <Typography variant="h4">
        A mini-fun project, web-app frontend working calculator which supports
        addition, subtraction, multiplication and division. Framework used{" "}
        <a href="https://react.dev/" style={{ color: "inherit" }}>
          React
        </a>
        , have fun!!!
      </Typography>
      <Container maxWidth="sm">
        <Box
          sx={{
            bgcolor: "#FFA500",
            height: "auto",
            border: "2px solid grey",
          }}
        >
          <Typography>
            {firstNum} {operator} {secondNum}
          </Typography>
          <Typography>Total Sum = {totalSum}</Typography>
          <Box sx={{ border: "2px solid grey", boxSizing: "border-box" }}>
            <Grid container spacing={1}>
              <Grid item xs={3}>
                <Button onClick={zeroButton} variant="contained">
                  0
                </Button>
              </Grid>
              <Grid item xs={3}>
                <Button onClick={oneButton} variant="contained">
                  1
                </Button>
              </Grid>
              <Grid item xs={3}>
                <Button onClick={twoButton} variant="contained">
                  2
                </Button>
              </Grid>
              <Grid item xs={3}>
                <Button onClick={additionButton} variant="contained">
                  +
                </Button>
              </Grid>

              <Grid item xs={3}>
                <Button onClick={threeButton} variant="contained">
                  3
                </Button>
              </Grid>
              <Grid item xs={3}>
                <Button onClick={fourButton} variant="contained">
                  4
                </Button>
              </Grid>
              <Grid item xs={3}>
                <Button onClick={fiveButton} variant="contained">
                  5
                </Button>
              </Grid>
              <Grid item xs={3}>
                <Button onClick={substractionButton} variant="contained">
                  -
                </Button>
              </Grid>

              <Grid item xs={3}>
                <Button onClick={sixButton} variant="contained">
                  6
                </Button>
              </Grid>
              <Grid item xs={3}>
                <Button onClick={sevenButton} variant="contained">
                  7
                </Button>
              </Grid>
              <Grid item xs={3}>
                <Button onClick={eightButton} variant="contained">
                  8
                </Button>
              </Grid>
              <Grid item xs={3}>
                <Button onClick={multiButton} variant="contained">
                  *
                </Button>
              </Grid>

              <Grid item xs={3}>
                <Button onClick={nineButton} variant="contained">
                  9
                </Button>
              </Grid>
              <Grid item xs={3}>
                <Button onClick={calclulateButton} variant="contained">
                  =
                </Button>
              </Grid>
              <Grid item xs={3}>
                <Button onClick={clearButton} variant="contained">
                  clear
                </Button>
              </Grid>
              <Grid item xs={3}>
                <Button onClick={divButton} variant="contained">
                  /
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
      <Footer />
    </div>
  );
};

export default App;
