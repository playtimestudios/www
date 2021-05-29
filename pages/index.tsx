import {
  Box,
  Container,
  Fade,
  Grid,
  Typography
} from '@material-ui/core'

import Head from 'next/head'
import React, { ReactElement } from 'react'
import { LoremIpsum } from 'react-lorem-ipsum'
import VizSensor from 'react-visibility-sensor'

export default function MuiIndex(): ReactElement {
  const [intro1Viz, setIntro1Viz] = React.useState(false)
  const [intro2Viz, setIntro2Viz] = React.useState(false)
  const [intro3Viz, setIntro3Viz] = React.useState(false)
  const [intro4Viz, setIntro4Viz] = React.useState(false)
  const [intro5Viz, setIntro5Viz] = React.useState(false)
  const [intro6Viz, setIntro6Viz] = React.useState(false)
  const [intro7Viz, setIntro7Viz] = React.useState(false)
  const [intro8Viz, setIntro8Viz] = React.useState(false)

  return (
    <>
      <Head>
        <title>Playtime Studios</title>
      </Head>
      <Container
        maxWidth="md"
        style={{padding: "0 3rem"}}
      >
        <Grid container direction="column" style={{minHeight: "100vh", paddingTop: "35vh", textAlign: "center"}}>
          <Grid item>
            <Typography component="h1" style={{fontSize: "0"}}>
              Playtime Studios
            </Typography>
            <img alt="Playtime Studios" height="auto" src="/logo.svg" width="100%" />
          </Grid>
        </Grid>
        <Grid container direction="column" style={{margin: "25vh 0"}}>
          <VizSensor onChange={(isVisible) => { setIntro1Viz(isVisible) }} partialVisibility={true}>
            <Fade in={intro1Viz} timeout={3000}>
              <Grid item>
                <Typography paragraph style={{color: "#888"}} variant="h2">
                  Need excellent people who deliver excellent software solutions?
                </Typography>
                <Typography paragraph style={{color: "#888"}} variant="h2">
                  Want to squeeze every last drop of potential from your team?
                </Typography>
                <Typography paragraph style={{color: "#888"}} variant="h2">
                  Stuck in the mud but dream of flying above the clouds?
                </Typography>
              </Grid>
            </Fade>
          </VizSensor>
        </Grid>
        <Grid container direction="column" style={{margin: "50vh 0"}}>
          <VizSensor onChange={(isVisible) => { setIntro2Viz(isVisible) }} partialVisibility={true}>
            <Fade in={intro2Viz} timeout={3000}>
              <Grid item>
                <Typography gutterBottom variant="h2">
                  Welcome
                </Typography>
                <Typography paragraph variant="h3" style={{color: "#888"}}>
                  With over fifteen years experience Playtime Studios is rapidly growing as a leader in the software industry.
                </Typography>
                <Typography paragraph variant="h3" style={{color: "#888"}}>
                  We work in several key disciplines with many satisfied clients delivering cost effective and value driven solutions.
                </Typography>
                <Typography paragraph variant="h3" style={{color: "#888"}}>
                  Our deep understanding of the underlying fundamentals gives us the advantage over our competition.
                </Typography>
                <Typography paragraph variant="h3" style={{color: "#888"}}>
                  Our commitment, whether working autonomously or augmenting your existing team, is to pass that advantage on to you.
                </Typography>
              </Grid>
            </Fade>
          </VizSensor>
        </Grid>
        <Grid container direction="column" style={{margin: "50vh 0"}}>
          <VizSensor onChange={(isVisible) => { setIntro4Viz(isVisible) }} partialVisibility={true}>
            <Fade in={intro4Viz} timeout={3000}>
              <Grid item>
                <Typography gutterBottom variant="h2">UX</Typography>
                {/* Maybe these sections should be written in terms of cycles, eg, UX cycle, engineering cycle,... maybe doesn't work with the rest */}
                <Typography paragraph variant="h3" style={{color: "#888"}}>
                  The right user experience is essential.
                </Typography>
                <Typography paragraph variant="h3" style={{color: "#888"}}>
                  User feedback, research, metrics, rapid application development, control and experimental.
                </Typography>
              </Grid>
            </Fade>
          </VizSensor>
        </Grid>
        <Grid container direction="column" style={{margin: "50vh 0"}}>
          <VizSensor onChange={(isVisible) => { setIntro3Viz(isVisible) }} partialVisibility={true}>
            <Fade in={intro3Viz} timeout={3000}>
              <Grid item>
                <Typography gutterBottom variant="h2">Engineering</Typography>
                <Typography paragraph variant="h3" style={{color: "#888"}}>
                  Relating to and creating a good user experience is relatively easy. Solid engineering to back it up is hard.
                </Typography>
              </Grid>
            </Fade>
          </VizSensor>
        </Grid>
        <Grid container direction="column" style={{margin: "50vh 0"}}>
          <VizSensor onChange={(isVisible) => { setIntro5Viz(isVisible) }} partialVisibility={true}>
            <Fade in={intro5Viz} timeout={3000}>
              <Grid item>
                <Typography gutterBottom variant="h2">Management</Typography>
                <Typography paragraph variant="h3" style={{color: "#888"}}>
                  Demystify the gap between business and software.
                </Typography>
                <Typography paragraph variant="h3" style={{color: "#888"}}>
                  Understanding every aspect, agile through and through, taking the pain out of managment processes.
                </Typography>
              </Grid>
            </Fade>
          </VizSensor>
        </Grid>
        <Grid container direction="column" style={{margin: "50vh 0"}}>
          <VizSensor onChange={(isVisible) => { setIntro6Viz(isVisible) }} partialVisibility={true}>
            <Fade in={intro6Viz} timeout={3000}>
              <Grid item>
                <Typography gutterBottom variant="h2">Delivery</Typography>
                <Typography paragraph variant="h3" style={{color: "#888"}}>
                  Not the end but a new beginning.
                </Typography>
                <Typography paragraph variant="h3" style={{color: "#888"}}>
                  At Playtime Studios we don&rsquo;t deliver a user experience and then we&rsquo;re done. That experience is another opportunity to improve and create additional experiences for our using.
                </Typography>
                <Typography paragraph variant="h3" style={{color: "#888"}}>
                  User testing continues and metrics are collected to fuel new development.
                </Typography>
                <Typography paragraph variant="h3" style={{color: "#888"}}>
                  Users continue exploratory testing, issues are identified, and resolved rapidly.
                </Typography>
              </Grid>
            </Fade>
          </VizSensor>
        </Grid>
        <Grid container direction="column" style={{margin: "50vh 0"}}>
          <VizSensor onChange={(isVisible) => { setIntro7Viz(isVisible) }} partialVisibility={true}>
            <Fade in={intro7Viz} timeout={3000}>
              <Grid item>
                <Typography gutterBottom variant="h2">Training</Typography>
                <Typography paragraph variant="h3" style={{color: "#888"}}>
                  Some text
                </Typography>
              </Grid>
            </Fade>
          </VizSensor>
        </Grid>
        <Grid container direction="column" style={{margin: "50vh 0"}}>
          <VizSensor onChange={(isVisible) => { setIntro8Viz(isVisible) }} partialVisibility={true}>
            <Fade in={intro8Viz} timeout={3000}>
              <Grid item>
                <Typography gutterBottom variant="h2">Simply Comprehensive</Typography>
                <Typography paragraph variant="h3" style={{color: "#888"}}>
                  Priced per service, iterative engagement with no further commitment.
                </Typography>
              </Grid>
            </Fade>
          </VizSensor>
        </Grid>
        <Grid container direction="column" style={{borderTop: "1px solid #888", marginTop: "50vh", padding: "2rem 2rem 3rem 2rem", textAlign: "center"}}>
          <Grid item>
            <Typography variant="body2">Playtime Studios (#12341243)...</Typography>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}
