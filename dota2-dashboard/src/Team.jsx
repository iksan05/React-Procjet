import { Typography, Grid, Avatar, Paper } from "@material-ui/core";
import Axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import PlayerTeams from "./PlayersTeam";
import MatchsTeam from "./MatchsTeam";

/* 
  Berfungsi untuk style
*/
const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
  container: {
    padding: theme.spacing(5),
  },
}));

/* 
  Komponen : Team
  Fungsi : Menampilkan detail team berdasarkan id yang didapat dari url path parameter
*/
function Team() {
  const classes = useStyles();
  const { id } = useParams(); // ambil id dari url path parameter -> /team/:id
  const [team, setTeam] = useState({});

  /*
    Fungsi : mengambil data detail team berdasarkan id team
    return void
  */
  const getTeam = async () => {
    try {
      const res = await Axios({
        method: "GET",
        url: `https://api.opendota.com/api/teams/${id}`,
      });
      console.log(res.data);
      setTeam(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  // jalankan useEffect ketika perubahan nilai pada id
  useEffect(() => {
    getTeam();
  }, [id]);

  return (
    <Fragment>
      <Grid container className={classes.container}>
        <Grid container alignItems="center" style={{ padding: 10 }}>
          <Grid item>
            <Avatar className={classes.large} src={team.logo_url} />
          </Grid>
          <Grid item>
            <Typography variant="h5">{team.name}</Typography>
          </Grid>
        </Grid>
        <Grid container spacing={3} alignItems="center" style={{ padding: 10 }}>
          <Grid item>
            <Typography variant="h6">Win Rate</Typography>
            <Typography variant="h5">{((team.wins/(team.wins+team.losses))*100).toFixed(1)}%</Typography>
          </Grid>
          <Grid item>
            <Typography variant="h6">Wins</Typography>
            <Typography variant="h5" style={{ color: "green" }}>
              {team.wins}
            </Typography>
          </Grid>
          <Grid>
            <Typography variant="h6">Losses</Typography>
            <Typography variant="h5" color="error">
              {team.losses}
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={5} justify="space-between" >
          <Grid item>
            {/* Menampilkan daftar pertandingan */}
            <MatchsTeam team_id={id} />
          </Grid>
          <Grid item>
            {/* Menampilkan daftar pemain team */}
            <PlayerTeams team_id={id} />
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  );
}

export default Team;
