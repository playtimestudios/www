import {
  Container,
  Fade,
  Grid,
  IconButton,
  Typography,
  withStyles
} from '@material-ui/core'

import EmailRoundedIcon from '@material-ui/icons/EmailRounded'
import Head from 'next/head'
import Script from 'next/script'
import LoremIpsum from 'react-lorem-ipsum'
import React, { ReactElement } from 'react'
import VizSensor from 'react-visibility-sensor'

const Section = (
  {
    children,
    marginTop
  }: {
    children: React.ReactNode,
    marginTop: string
  }
): ReactElement => {
  const [visible, setVisible] = React.useState(false)

  return(
    <>
      <Grid container direction="column" style={{marginTop: marginTop}}>
        <VizSensor onChange={(isVisible) => { setVisible(isVisible) }} partialVisibility={true}>
          <Fade in={visible} timeout={3000}>
            <Grid item>
              {children}
            </Grid>
          </Fade>
        </VizSensor>
      </Grid>
    </>
  )
}

const Sections = (): ReactElement => {
  const SectionTypography = withStyles((theme) => ({
    root: {
      color: theme.typography.body1.color
    }
  }))(Typography) as typeof Typography

  const sections = [
    <>
      <Typography gutterBottom variant="h2">Welcome</Typography>
      <SectionTypography component="div" variant="h3">
        <LoremIpsum avgSentencesPerParagraph={3} p={3} random={false} />
      </SectionTypography>
    </>,
    <>
      <Typography gutterBottom variant="h2">Testing</Typography>
      <SectionTypography component="div" variant="h3">
        <LoremIpsum avgSentencesPerParagraph={3} p={2} random={false} />
      </SectionTypography>
    </>,
    <>
      <Typography gutterBottom variant="h2">UX</Typography>
      <SectionTypography component="div" variant="h3">
        <LoremIpsum avgSentencesPerParagraph={3} p={2} random={false} />
      </SectionTypography>
    </>,
    <>
      <Typography gutterBottom variant="h2">Management</Typography>
      <SectionTypography component="div" variant="h3">
        <LoremIpsum avgSentencesPerParagraph={3} p={2} random={false} />
      </SectionTypography>
    </>,
    <>
      <Typography gutterBottom variant="h2">Engineering</Typography>
      <SectionTypography component="div" variant="h3">
        <LoremIpsum avgSentencesPerParagraph={3} p={2} random={false} />
      </SectionTypography>
    </>,
    <>
      <Typography gutterBottom variant="h2">Delivery</Typography>
      <SectionTypography component="div" variant="h3">
        <LoremIpsum avgSentencesPerParagraph={3} p={2} random={false} />
      </SectionTypography>
    </>,
    <>
      <Typography gutterBottom variant="h2">Training</Typography>
      <SectionTypography component="div" variant="h3">
        <LoremIpsum avgSentencesPerParagraph={3} p={2} random={false} />
      </SectionTypography>
    </>,
    <>
      <Typography gutterBottom variant="h2">Are you ready?</Typography>
      <SectionTypography component="div" variant="h3">
        <LoremIpsum avgSentencesPerParagraph={3} p={2} random={false} />
      </SectionTypography>
    </>
  ].map((section, index) => {
    const marginTop: string = index == 0 ? "1vh" : "50vh"

    return(
    <Section key={index} marginTop={marginTop}>
      {section}
    </Section>
    )
  })

  return(<>{sections}</>)
}

export default function Index(): ReactElement {
  return (
    <>
      <Head>
        <title>Playtime Studios</title>
      </Head>
      <Script
        id="hs-script-loader"
        src="https://js-na1.hs-scripts.com/20268434.js"
      />
      <Container
        maxWidth="md"
      >
        <Grid container direction="column" style={{minHeight: "100vh", paddingTop: "30vh", textAlign: "center"}}>
          <Grid item>
            <Typography component="h1" style={{fontSize: "0"}}>
              Playtime Studios
            </Typography>
            <img alt="Playtime Studios" height="auto" src="/logo.svg" width="100%" />
          </Grid>
        </Grid>
        <Sections />
        <Grid
          alignItems="center"
          component="footer"
          container
          direction="row"
          justify="space-between"
          spacing={5}
          style={{
            borderTop: "1px solid #555",
            marginTop: "50vh",
            textAlign: "center"
          }}>
          <Grid item>
            <IconButton href="mailto:www@playtimestudios.com">
              <EmailRoundedIcon />
            </IconButton>
          </Grid>
          <Grid item>
            <Typography variant="body2">Copyright &copy; {new Date().getFullYear()} Playtime Studios Ltd</Typography>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}
