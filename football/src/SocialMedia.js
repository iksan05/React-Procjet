import React, { Fragment } from "react";
import { Grid, IconButton, Link, Paper } from "@material-ui/core";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import LanguageIcon from "@material-ui/icons/Language";
import TwitterIcon from "@material-ui/icons/Twitter";

function SocialMedia({ links }) {
  return (
    <Fragment>
      <Grid container justify="center" component={Paper} elevation={2} style={{
        margin: 'auto',
        backgroundColor: '#C0C0C0',
        width: 'auto',
        maxWidth: '50%'
      }}>
        {links.strInstagram && (
          <IconButton component={Link} href={`http://${links.strInstagram}`}>
            <InstagramIcon />
          </IconButton>
        )}
        {links.strFacebook && (
          <IconButton component={Link} href={`http://${links.strFacebook}`}>
            <FacebookIcon />
          </IconButton>
        )}
        {links.strWebsite && (
          <IconButton component={Link} href={`http://${links.strWebsite}`}>
            <LanguageIcon />
          </IconButton>
        )}
        {links.strTwitter && (
          <IconButton component={Link} href={`http://${links.strTwitter}`}>
            <TwitterIcon />
          </IconButton>
        )}
      </Grid>
    </Fragment>
  );
}

export default SocialMedia;
