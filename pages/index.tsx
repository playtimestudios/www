import {
  Box,
  Button, Container, Typography
} from '@mui/material'

import Head from 'next/head';
import React, { ReactElement } from 'react';
import {Footer} from "./footer";
import {Header} from "./header";
import Grid from "@mui/material/Unstable_Grid2";

export default function Index(): ReactElement {
  return (
    <>
      <Head>
        <title>Playtime Studios</title>
      </Head>
      <Container maxWidth="lg">
        <Box py={2}>
          <Header/>
        </Box>
        <Grid bgcolor="#222" container justifyContent="center" style={{position: "relative", width: "100vw", left: "calc(-50vw + 50%)"}}>
          <Container maxWidth="lg">
            <Grid container py={4} spacing={4}>
              <Grid xs={12} lg={6}>
                <img alt="Test" src="/bruce-mars-FWVMhUa_wbY-unsplash.jpg" style={{width: "100%"}} />
              </Grid>
              <Grid xs={12} lg={6}>
                <Typography style={{color: "#ff33cc"}} gutterBottom variant="h2">Create, delight, engage, and grow</Typography>
                <Typography style={{color: "#fff"}} gutterBottom variant="body1">
                  Creative solutions that delight customers, increase engagement, and grow businesses.
                </Typography>
                <Typography style={{color: "#fff"}} gutterBottom variant="body1">
                  We take a wholistic scientific approach to engineering solutions across the entire technology stack and project lifecycle ensuring unrivalled engagement and added value.
                </Typography>
                <Typography style={{color: "#fff"}} gutterBottom variant="body1">
                  Our relentless pursuit of efficiency enables rapid delivery and iteration at higher velocities whilst increasing ROI.
                </Typography>
                <Typography style={{color: "#fff"}} variant="body1">
                  We promise to deliver greater value faster, putting you ahead of the competition.
                </Typography>
              </Grid>
            </Grid>
          </Container>
        </Grid>
        <Grid container pt={4} spacing={4}>
          <Grid xs={12} textAlign="center">
            <Typography gutterBottom variant="h2">Realise Your Dreams</Typography>
            <Typography gutterBottom variant="body1">
              At Playtime Studios our mission is to transform your dreams into reality.
            </Typography>
            <Typography gutterBottom variant="body1">
              Whether you’re validating a business hypothesis or growing an existing product, we’re here to help you
              achieve your goals.
            </Typography>
            <Typography variant="body1">
              We specialize in two key areas:
            </Typography>
          </Grid>
          <Grid xs={12} lg={6}>
            <Typography align="center" gutterBottom variant="h3">Software Engineering</Typography>
            <p><img alt="Test" src="/scott-graham-5fNmWej4tAA-unsplash.jpg" style={{width: "100%"}} /></p>
            <Typography gutterBottom variant="body1">
              We take a wholistic scientific approach to engineering solutions across the entire technology stack and project lifecycle ensuring unrivalled engagement and added value.
            </Typography>
            <Typography gutterBottom variant="body1">
              Our relentless pursuit of efficiency enables rapid delivery and iteration at higher velocities whilst increasing ROI.
            </Typography>
            <Typography variant="body1">
              We promise to deliver greater value faster, putting you ahead of the competition.
            </Typography>
          </Grid>
          <Grid xs={12} lg={6}>
            <Typography align="center" gutterBottom variant="h3">Customer Development</Typography>
            <p><img alt="Test" src="/john-schnobrich-2FPjlAyMQTA-unsplash.jpg" style={{width: "100%"}} /></p>
            <Typography gutterBottom variant="body1">
              We take a wholistic scientific approach to engineering solutions across the entire technology stack and project lifecycle ensuring unrivalled engagement and added value.
            </Typography>
            <Typography gutterBottom variant="body1">
              Our relentless pursuit of efficiency enables rapid delivery and iteration at higher velocities whilst increasing ROI.
            </Typography>
            <Typography variant="body1">
              We promise to deliver greater value faster, putting you ahead of the competition.
            </Typography>
          </Grid>
          <Grid xs={12} textAlign="center">
            <Typography gutterBottom variant="h2">Peace of Mind</Typography>
            <Typography gutterBottom variant="body1">
              {new Date().getFullYear() - 2011} years experience working with some of the best known brands in the UK.
            </Typography>
            <Grid container pt={2} spacing={4} alignItems="center" justifyContent="center">
              <Grid>
                <img
                  alt="BMW"
                  src="/bmw.svg"
                  style={{height: '2em'}}
                />
              </Grid>
              <Grid>
                <img
                  alt="Playtime Studios"
                  src="/citizens-advice.svg"
                  style={{height: '2em'}}
                />
              </Grid>
              <Grid>
                <img
                  alt="HM Government"
                  src="/hm-government.svg"
                  style={{height: '2em'}}
                />
              </Grid>
              <Grid>
                <img
                  alt="Money Helper"
                  src="/money-helper.svg"
                  style={{height: '2em'}}
                />
              </Grid>
              <Grid>
                <img
                  alt="Patchwork Health"
                  src="/patchwork-health.svg"
                  style={{height: '2em'}}
                />
              </Grid>
              <Grid>
                <img
                  alt="Square Enix"
                  src="/square-enix.svg"
                  style={{height: '2em'}}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid pt={4}>
          <Footer/>
        </Grid>
      </Container>
    </>
  )
}
