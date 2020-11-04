import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Grid,
  Typography,
  Avatar,
} from "@material-ui/core";
import Axios from "axios";
import { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
/**
 * Fungsi : Menampilkan daftar pertandingan
 * state: matchs -> menyimpan daftar pertandingan yang didapat dari API
 */
function MatchsTeam({ team_id }) {
  const [matchs, setMatchs] = useState([]);
  const getMatchs = async () => {
    try {
      const res = await Axios({
        method: "GET",
        url: `https://api.opendota.com/api/teams/${team_id}/matches`,
      });
      //mengambil pertandingan sebanyak 25
      setMatchs(res.data.slice(0, 25));
    } catch (error) {
      console.log(error);
    }
  };
// jalankan useEffect ketika perubahan nilai pada team_id
  useEffect(() => {
    getMatchs();
  }, [team_id]);

  return (
    <Fragment>
      <TableContainer component={Paper} elevation={5}>
        <Typography variant="h6" style={{ padding: 15 }}>
          Recent Matches
        </Typography>
        <Table
          style={{
            width: "auto",
          }}
        >
          <TableHead>
            <TableRow>
              <TableCell>Match ID</TableCell>
              <TableCell>Againts</TableCell>
              <TableCell>Duration</TableCell>
              <TableCell>Result</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {matchs.map((match) => (
              <TableRow key={match.match_id}>
                <TableCell>
                  <Grid container>
                    <Grid container>
                      <Typography>{match.match_id}</Typography>
                    </Grid>
                    <Grid container>
                      <Typography>{match.league_name}</Typography>
                    </Grid>
                  </Grid>
                </TableCell>
                <TableCell>
                  <Grid container alignItems="center">
                    <Grid item>
                      <Avatar src={match.opposing_team_logo} />
                    </Grid>
                    <Grid item>
                      <Link to={`/team/${match.opposing_team_id}`}>
                        {match.opposing_team_name}
                      </Link>
                    </Grid>
                  </Grid>
                </TableCell>
                <TableCell>{match.duration}</TableCell>
                <TableCell>
                  {match.radiant_win === true ? (
                    <Typography style={{ color: "green" }}>
                      Won Match
                    </Typography>
                  ) : (
                    <Typography style={{ color: "red" }}>Lost Match</Typography>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Fragment>
  );
}

export default MatchsTeam;
