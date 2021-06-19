import {
  Container,
  Fade,
  Grid,
  Typography,
  withStyles
} from '@material-ui/core'

import Head from 'next/head'
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
      <Container
        maxWidth="md"
      >
        <Grid container direction="column" style={{minHeight: "100vh", paddingTop: "35vh", textAlign: "center"}}>
          <Grid item>
            <Typography component="h1" style={{fontSize: "0"}}>
              Playtime Studios
            </Typography>
            <img alt="Playtime Studios" height="auto" src="/logo.svg" width="100%" />
          </Grid>
        </Grid>
        <Sections />
        <Grid component="footer" container direction="column" style={{borderTop: "1px solid #888", marginTop: "50vh", padding: "2rem 2rem 3rem 2rem", textAlign: "center"}}>
          <Grid item>
            <Typography variant="body2">Playtime Studios (#12341243)...</Typography>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}
