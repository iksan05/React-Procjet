import React, { Fragment } from "react";
import { Grid, Paper, Typography } from "@material-ui/core";

function Stadium({ stadion }) {
  return (
    <Fragment>
      <Grid
        container
        component={Paper}
        elevation={3}
        style={{ width: "100%", margin: 20, padding: 20 }}
      >
        <Grid container>
          <Typography variant="h4"> Stadium {stadion.strStadium}</Typography>
        </Grid>
        <img
          src={stadion.strStadiumThumb}
          style={{
            width: "45%",
            hegith: "100%",
          }}
          alt="Stadium"
        />
        <Typography variant="caption" align="justify" nowrap style={{width: '50%',paddingLeft:10}}>
          {stadion.strDescriptionEN}
        </Typography>
      </Grid>
    </Fragment>
  );
}

export default Stadium;
