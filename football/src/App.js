import React, { useState, useEffect } from "react";
import axios from "axios";
import LinearProgress from "@material-ui/core/LinearProgress";
import {
  Grid,
  ListItem,
  List,
  Paper,
  TextField,
  Typography,
  ListItemText,
} from "@material-ui/core";
import SocialMedia from "./SocialMedia";

import Avatar from "@material-ui/core/Avatar";
import Stadium from "./Stadium";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

function App() {
  const classes = useStyles();
  const [t, setT] = useState("");
  const [team, setTeam] = useState({});
  const [tanding, setTanding] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await axios({
        url: "https://www.thesportsdb.com/api/v1/json/1/searchteams.php",
        method: "GET",
        params: {
          t,
        },
      });
      console.log(res.data);
      setTeam(res.data.teams[0]);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };
  const fetchMatch = async () => {
    try {
      const res = await axios(
        `https://www.thesportsdb.com/api/v1/json/1/eventsnext.php?id=${team.idTeam}`
      );
      console.log(res.data.events[0]);

      setTanding(res.data.events[0]);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchMatch();
  }, [team]);
  const getTeam = (e) => {
    if (e.key === "Enter") {
      fetchData();
      setT("");
    }
  };

  const onChangeHandler = (e) => {
    setT(e.target.value);
  };

  return (
    <div className="App">
      {loading ? <LinearProgress /> : ""}
      <Grid container style={{ margin: 20 }}>
        <TextField
          variant="outlined"
          label="Team"
          size="small"
          onKeyPress={getTeam}
          value={t}
          onChange={onChangeHandler}
        />
      </Grid>
      <Grid container style={{ margin: 20 }} spacing={3}>
        <Grid item>
          <Grid
            container
            component={Paper}
            elevation={3}
            alignItems="center"
            style={{
              width: "auto",
              padding: 20,
              marginTop: 20,
            }}
          >
            <Avatar
              alt="Team Badge"
              src={team.strTeamBadge}
              className={classes.large}
            />
            <Typography variant="h6" noWrap>
              {team.strAlternate}
            </Typography>
          </Grid>
        </Grid>
        <Grid item>
          <Grid
            container
            component={Paper}
            elevation={3}
            alignItems="center"
            justify="center"
            style={{
              width: "auto",
              padding: 20,
              marginTop: 20,
            }}
          >
            <Grid container style={{ marginBottom: 15 }} justify="center">
              <Typography variant="h4">Up Coming Event</Typography>
            </Grid>
            <Grid container justify="center">
              <Typography variant="h6">{tanding.strEvent}</Typography>
            </Grid>
            <Grid container justify="center">
              <Typography variant="subtitle1">{tanding.dateEvent}</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid
            container
            component={Paper}
            elevation={3}
            alignItems="center"
            justify="center"
            style={{
              width: "auto",
              padding: 20,
              marginTop: 20,
            }}
          >
            <Grid container style={{ width: "auto", height: "auto" }}>
              <Typography variant="h4">Jersey</Typography>
              <img
                src={team.strTeamJersey}
                alt="Jersey"
                style={{
                  width: "auto",
                  height: "auto",
                }}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid container>
        <Stadium stadion={team} />
      </Grid>
      <SocialMedia links={team} />
    </div>
  );
}

export default App;
