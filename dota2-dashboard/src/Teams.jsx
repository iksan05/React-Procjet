import { Fragment, useEffect, useState } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import axios from 'axios';

function Teams() {
  const [teams, setTeams] = useState([]);


  const getDataTeams = async () => {
      try {
        const res = await axios({
            method: 'GET',
            url: 'https://api.opendota.com/api/teams'
        });
        console.log(res.data);
        
      } catch (error) {
          console.log(error);
      }
  }

  useEffect(() => {
    getDataTeams()
  },[]);

  return (
    <Fragment>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center">Rank</TableCell>
              <TableCell align="center">NAME</TableCell>
              <TableCell align="center">RATING</TableCell>
              <TableCell align="center">WINS</TableCell>
              <TableCell align="center">LOSSES</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell align="center">1st</TableCell>
              <TableCell align="center">1st</TableCell>
              <TableCell align="center">1st</TableCell>
              <TableCell align="center">1st</TableCell>
              <TableCell align="center">1st</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Fragment>
  );
}

export default Teams;
