import React, { Fragment } from "react";
import { Grid, Paper } from "@material-ui/core";

function WeatherData({ weather }) {
  return (
    <Fragment>
      <Paper elevation={3}>
        <Grid container justify="center">
          <h2>
            {weather.city},{weather.region},{weather.country}
          </h2>
        </Grid>
        <Grid container justify="center">
          <h2>{weather.date}</h2>
        </Grid>
        <Grid container justify="center">
          <h2>{weather.time}</h2>
        </Grid>
        <Grid container justify="center">
          <h2>Temperature</h2>
        </Grid>
        <Grid container justify="center">
          <h2>
            {weather.tempC}
            <span>&#8451;/</span>
          </h2>
          <h2>
            {weather.tempF}
            <span>F</span>
          </h2>
        </Grid>
        <Grid container justify="center">
          <h2>Fells Like</h2>
        </Grid>
        <Grid container justify="center">
          <h2>
            {weather.feelsC}
            <span>&#8451;/</span>
          </h2>
          <h2>
            {weather.feelsF}
            <span>F</span>
          </h2>
        </Grid>
      </Paper>
    </Fragment>
  );
}

export default WeatherData;
