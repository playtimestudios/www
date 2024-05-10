import {visuallyHidden} from "@mui/utils";
import React, {ReactElement} from "react";
import Grid from "@mui/material/Unstable_Grid2";
import {Typography} from "@mui/material";

export const Header = (): ReactElement => {
  return (
    <Grid container justifyContent="center">
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
          style={{height: '4em'}}
        />
      </Grid>
    </Grid>
  )
}
