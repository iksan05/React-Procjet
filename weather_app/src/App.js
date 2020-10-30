import React, { Fragment } from "react";
import "./App.css";
import SearchCity from "./SearchCity";
import Grid from "@material-ui/core/Grid";

function App() {
  return (
    <Fragment>
      <Grid container>
        <SearchCity />
      </Grid>
    </Fragment>
  );
}

export default App;
