import "../../styles/App.css";
import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import { Button } from "@mui/material";

function App() {
  return (
    <>
      <div>display</div>
      <Box sx={{ border: "2px solid grey", boxSizing: "border-box" }}>
        <Grid container spacing={1}>
          <Grid item xs={3}>
            <Button variant="contained">0</Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained">1</Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained">2</Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained">+</Button>
          </Grid>

          <Grid item xs={3}>
            <Button variant="contained">3</Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained">4</Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained">5</Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained">-</Button>
          </Grid>

          <Grid item xs={3}>
            <Button variant="contained">6</Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained">7</Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained">8</Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained">*</Button>
          </Grid>

          <Grid item xs={3}>
            <Button variant="contained">9</Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained">=</Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained">clear</Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained">/</Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default App;
