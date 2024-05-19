import {visuallyHidden} from "@mui/utils";
import React, {ReactElement} from "react";
import Grid from "@mui/material/Unstable_Grid2";
import {Button, Typography} from "@mui/material";

export const Header = (): ReactElement => {
  return (
    <Grid container justifyContent="space-between" position="fixed" width="100vw" p={2} bgcolor="#222" top="0" alignItems="center">
      <Grid height="3em">
        <Typography
          component="h1"
          style={visuallyHidden}
        >
          Playtime Studios
        </Typography>
        <img
          alt="Playtime Studios"
          src="/logo.svg"
          style={{height: '3em'}}
        />
      </Grid>
      <Grid>
        <Button variant="contained" disableRipple href="#contact">Contact Us</Button>
      </Grid>
    </Grid>
  )
}
