import {
  Box,
  Container,
  Fade,
  Grid,
  IconButton,
  Typography,
  makeStyles,
  withStyles
} from '@material-ui/core'

import EmailRoundedIcon from '@material-ui/icons/EmailRounded'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import TwitterIcon from '@material-ui/icons/Twitter'
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
      <Typography gutterBottom variant="h2">
        Welcome
      </Typography>
      <SectionTypography paragraph variant="h3">
        For {new Date().getFullYear() - 2011} years we&rsquo;ve been producing excellent software, our own and for many satisfied clients.
      </SectionTypography>
      <SectionTypography paragraph variant="h3">
        Our deep thinking, understanding, insight, efficiency, and drive to continously improve gives us the advantage over our competition.
      </SectionTypography>
      <SectionTypography paragraph variant="h3">
        Our commitment is to continue to deliver excellent software and contribute to life in a good and meaningful way.
      </SectionTypography>
    </>,
    <>
      <Typography gutterBottom variant="h2">
        Management
      </Typography>
      <SectionTypography paragraph variant="h3">
        We&rsquo;ve been managing software projects since waterfall, through early agile, to our own version of lean. We&rsquo;ve seen it all.
      </SectionTypography>
      <SectionTypography paragraph variant="h3">
        Whatever your current situation and management objectives, we&rsquo;ve got you covered.
      </SectionTypography>
    </>,
    <>
      <Typography gutterBottom variant="h2">
        UX
      </Typography>
      <SectionTypography paragraph variant="h3">
        An excellent user experience is key to user engagement and the success of your app.
      </SectionTypography>
      <SectionTypography paragraph variant="h3">
        We offer an award winning UX service from rapid prototyping to finished product.
      </SectionTypography>
    </>,
    <>
      <Typography gutterBottom variant="h2">
        Testing
      </Typography>
      <SectionTypography component="div" variant="h3">
        <LoremIpsum avgSentencesPerParagraph={3} p={2} random={false} />
      </SectionTypography>
    </>,
    <>
      <Typography gutterBottom variant="h2">
        Engineering
      </Typography>
      <SectionTypography component="div" variant="h3">
        <LoremIpsum avgSentencesPerParagraph={3} p={2} random={false} />
      </SectionTypography>
    </>,
    <>
      <Typography gutterBottom variant="h2">
        Delivery
      </Typography>
      <SectionTypography component="div" variant="h3">
        <LoremIpsum avgSentencesPerParagraph={3} p={2} random={false} />
      </SectionTypography>
    </>,
    <>
      <Typography gutterBottom variant="h2">
        Training
      </Typography>
      <SectionTypography component="div" variant="h3">
        <LoremIpsum avgSentencesPerParagraph={3} p={2} random={false} />
      </SectionTypography>
    </>,
    <>
      <Typography gutterBottom variant="h2">
        Are you ready?
      </Typography>
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

const useStyles = makeStyles((theme) => ({
  connectLinks: {
    paddingTop: "1rem",
    textAlign: 'center',
    [theme.breakpoints.up('sm')]: {
      padding: 0,
      textAlign: 'left',
    }
  },
  copyright: {
    paddingBottom: "3rem",
    textAlign: 'center',
    [theme.breakpoints.up('sm')]: {
      padding: 0,
      textAlign: 'right'
    }
  }
}));

export default function Index(): ReactElement {
  const styles = useStyles()

  return (
    <>
      <Head>
        <title>Playtime Studios</title>
      </Head>
      <Script
        id="hs-script-loader"
        src="https://js-na1.hs-scripts.com/20268434.js"
      />
      <Container maxWidth="md">
        <Grid
          container
          direction="column"
          style={{
            minHeight: "100vh",
            paddingTop: "35vh",
            textAlign: "center"
          }}
        >
          <Grid item>
            <Typography
              component="h1"
              style={{fontSize: "0"}}
            >
              Playtime Studios
            </Typography>
            <img
              alt="Playtime Studios"
              height="auto"
              src="/logo.svg"
              width="100%"
            />
          </Grid>
        </Grid>
        <Sections />
        <Grid
          spacing={2}
          alignItems="center"
          component="footer"
          container
          justify="space-between"
          style={{
            borderTop: "1px solid #555",
            marginTop: "50vh",
          }}>
          <Grid item xs={12} sm={6}>
            <Box className={styles.connectLinks}>
              <IconButton href="mailto:www@playtimestudios.com">
                <EmailRoundedIcon />
              </IconButton>
              <IconButton href="https://www.linkedin.com/company/playtimestudios">
                <LinkedInIcon />
              </IconButton>
              <IconButton href="https://twitter.com/playtimestudios">
                <TwitterIcon />
              </IconButton>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box className={styles.copyright}>
              <Typography variant="body2">Copyright &copy; {new Date().getFullYear()} Playtime Studios Ltd</Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}
