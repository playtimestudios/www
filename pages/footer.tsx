import {Box, Button, IconButton, makeStyles, Typography} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import React, {ReactElement} from "react";
import Grid from "@mui/material/Unstable_Grid2";

export const Footer = (): ReactElement => {
  return (
    <Grid
      alignItems="center"
      component="footer"
      container
      justifyContent="space-between"
      padding={1}
    >
      <Grid>
        <Box>
          <IconButton href="https://www.linkedin.com/company/playtimestudios" style={{borderRadius: 4}}>
            <LinkedInIcon />
          </IconButton>
          <IconButton href="https://twitter.com/playtimestudios" style={{borderRadius: 4}}>
            <TwitterIcon />
          </IconButton>
        </Box>
      </Grid>
      <Grid>
        <Box>
          <Typography variant="body2">
            Copyright &copy; {new Date().getFullYear()} Playtime Studios Ltd
          </Typography>
        </Box>
      </Grid>
    </Grid>
  )
}
