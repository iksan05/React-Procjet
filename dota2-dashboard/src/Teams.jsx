import { Fragment, useEffect, useState } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import axios from "axios";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";


/*
  Komponen: Teams
  Fungsi : Menampilkan daftar team
  State: 1. teams -> menyimpan daftar teams
*/
function Teams() {
  const [teams, setTeams] = useState([]);

  /* 
    Fungsi : Mengambil daftar teams
    return void
  */
  const getDataTeams = async () => {
    try {
      const res = await axios({
        method: "GET",
        url: "https://api.opendota.com/api/teams",
      });
      // Ambil sebanyak 100 data dan simpan kedalam state teams
      setTeams(res.data.slice(0, 100));
    } catch (error) {
      console.log(error);
    }
  };

  /* 
    Eksekusi useEffect() ketika komponen render
  */
  useEffect(() => {
    getDataTeams();
  }, []);

  return (
    <Fragment>
      <TableContainer component={Paper} style={{padding:0}}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell align="center">Rank</TableCell>
              <TableCell align="left">NAME</TableCell>
              <TableCell align="center">RATING</TableCell>
              <TableCell align="center">WINS</TableCell>
              <TableCell align="center">LOSSES</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* 
              Menampilkan daftar team yang diambil dari state teams
            */}
            {teams.map((team, index) => (
              <TableRow key={index}>
                <TableCell align="center">{index + 1}</TableCell>
                <TableCell align="center">
                  <Grid container spacing={2}>
                    <Avatar src={team.logo_url} />
                    <Typography component={Link} to={`/team/${team.team_id}`}>{team.name}</Typography>
                  </Grid>
                </TableCell>
                <TableCell align="center"> {team.rating}</TableCell>
                <TableCell align="center">{team.wins}</TableCell>
                <TableCell align="center">{team.losses}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Fragment>
  );
}

export default Teams;
