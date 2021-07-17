import {
  Box,
  Container,
  Fade,
  Grid,
  IconButton,
  Link,
  Typography,
  makeStyles,
  withStyles
} from '@material-ui/core'

import EmailRoundedIcon from '@material-ui/icons/EmailRounded'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import TwitterIcon from '@material-ui/icons/Twitter'
import Head from 'next/head'
import Script from 'next/script'
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

const Sections = React.forwardRef<HTMLElement>((_, ref): ReactElement => {
  const SectionTypography = withStyles((theme) => ({
    root: {
      color: theme.typography.body1.color
    }
  }))(Typography) as typeof Typography

  const scrollTest = (): void => {
    if (ref && "current" in ref && ref.current) {
      ref.current.scrollIntoView()
    }
  }

  const sections = [
    <>
      <Typography gutterBottom variant="h2">
        Welcome
      </Typography>
      <SectionTypography paragraph variant="h3">
        For {new Date().getFullYear() - 2011} years we&rsquo;ve been producing excellent software, our own and for many satisfied clients.
      </SectionTypography>
      <SectionTypography paragraph variant="h3">
        Our deep thinking, understanding, insight, efficiency, and drive to continuously improve gives us the advantage over our competition.
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
        We offer an award-winning UX service, from rapid prototyping to finished product.
      </SectionTypography>
    </>,
    <>
      <Typography gutterBottom variant="h2">
        Testing
      </Typography>
      <SectionTypography paragraph variant="h3">
        The benefits of test driven development are often underestimated but TDD benefits all the other disciplines, from management through to delivery.
      </SectionTypography>
      <SectionTypography paragraph variant="h3">
        It allows us to fully define business expectations, discover unforeseen UX scenarios, produce better code, and reduce defects.
      </SectionTypography>
    </>,
    <>
      <Typography gutterBottom variant="h2">
        Engineering
      </Typography>
      <SectionTypography paragraph variant="h3">
        Where dreams become reality.
      </SectionTypography>
      <SectionTypography paragraph variant="h3">
        We do some light engineering in UX and testing, but this is where the heavy lifting&rsquo;s done, the hardest and most resource intensive part of the process.
      </SectionTypography>
      <SectionTypography paragraph variant="h3">
        Fortunately it&rsquo;s also our speciality. We can say with absolute confidence that we&rsquo;re industry leaders in this area.
      </SectionTypography>
      <SectionTypography paragraph variant="h3">
        We take pride in creating changeable, clean, cost-effective, efficient, exemplary, and resilient code that&rsquo;s truly world-class.
      </SectionTypography>
    </>,
    <>
      <Typography gutterBottom variant="h2">
        What are you waiting for?
      </Typography>
      <SectionTypography paragraph variant="h3">
        Start a <Link href="#hs-chat-open">chat</Link> or send us an <Link href="mailto:www@playtimestudios.com">email</Link> to find out how Playtime Studios can help turn your vision into a reality.
      </SectionTypography>
      <SectionTypography paragraph variant="h3">
        You can also connect with us on various networks via the <Link onClick={scrollTest}>links below</Link> to receive news and updates.
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
})

Sections.displayName = 'Sections'

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
  const footerRef = React.useRef<HTMLElement>(null)

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
        <Sections ref={(element) => {(footerRef as React.MutableRefObject<HTMLElement>).current = element}}/>
        <Grid
          alignItems="center"
          component="footer"
          container
          justify="space-between"
          ref={footerRef}
          spacing={2}
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
