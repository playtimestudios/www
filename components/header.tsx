import {visuallyHidden} from "@mui/utils";
import React, {ReactElement} from "react";
import Grid from "@mui/material/Unstable_Grid2";
import {Button, Typography} from "@mui/material";

export const Header = (): ReactElement => {
  return (
    <Grid container justifyContent="space-between">
      <Grid>
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
