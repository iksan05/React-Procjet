import Axios from "axios";
import { Fragment, useEffect, useState } from "react";
import {
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Grid,
  Typography,
  TableBody,
} from "@material-ui/core";
/**
 * Fungsi : Menampilkan daftar pemain
 * state: players -> menyimpan daftar pemain yang didapat dari API
 */
function PlayerTeams({ team_id }) {
  const [players, setPlayers] = useState([]);


  const getPlayers = async () => {
    try {
      const res = await Axios({
        method: "GET",
        url: `https://api.opendota.com/api/teams/${team_id}/players`,
      });
      console.log(res.data)
      const activePlayers = res.data.filter(
        (player) => player.is_current_team_member === true
      );
      setPlayers(activePlayers);
    } catch (error) {
      console.log(error);
    }
  };
// jalankan useEffect ketika perubahan nilai pada team_id
  useEffect(() => {
    getPlayers();
  }, [team_id]);

  return (
    <Fragment>
      <Grid container justify="flex-end">
        <TableContainer
          component={Paper}
          elevation={3}
          style={{
            width: 'auto',
            
          }}
        >
          <Typography variant="h6" style={{ padding: 5 }}>
            Current Players
          </Typography>
          <Table stickyHeader >
            <TableHead>
              <TableRow>
                <TableCell align="left" component={Typography}>
                  NAME
                </TableCell>
                <TableCell align="left" component={Typography}>
                  GAMES
                </TableCell>
                <TableCell align="left" component={Typography}>
                  WIN RATE
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {players.map((player) => (
                <TableRow>
                  <TableCell>{player.name}</TableCell>
                  <TableCell>{player.games_played}</TableCell>
                  <TableCell>
                    {((player.wins / player.games_played) * 100).toFixed(1)}%
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Fragment>
  );
}

export default PlayerTeams;
