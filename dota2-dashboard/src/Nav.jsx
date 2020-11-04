import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { Fragment } from "react";
import { Link } from "react-router-dom";
/*
    Komponen : Nav
    Fungsi : Menampilkan navigasi menu
*/
function Nav(){
    return(
        <Fragment>
            <AppBar color="secondary" position="static" style={{marginBottom: 10}}>
                <Toolbar>
                    <Typography component={Link} to="/teams" variant="h5" align="center">
                        Teams
                    </Typography>
                </Toolbar>
            </AppBar>
        </Fragment>
    )

}

export default Nav;