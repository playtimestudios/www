import {
  Card,
  CardContent,
  Container,
  CssBaseline,
  Grid,
  Link,
  ThemeProvider,
  Typography,
  createMuiTheme,
  makeStyles
} from '@material-ui/core'

import Head from 'next/head'
import React, { ReactElement } from 'react'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#0070f3"
    }
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      'Oxygen',
      'Ubuntu',
      'Cantarell',
      '"Fira Sans"',
      '"Droid Sans"',
      '"Helvetica Neue"',
      'sans-serif'
    ].join(', '),
    fontSize: 16,
    h1: {
      fontSize: '4.209rem',
      fontWeight: 700,
    },
    h2: {
      fontSize: '3.157rem',
      fontWeight: 700,
    },
    h3: {
      fontSize: '2.369rem',
      fontWeight: 700,
    },
    h4: {
      fontSize: '1.777rem',
      fontWeight: 700,
    },
    h5: {
      fontSize: '1.333rem',
      fontWeight: 700,
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 700,
    }
  }
})

const gridItemClasses = makeStyles((theme) => ({
  card: {
    height: "100%",
    "&:hover": {
      color: theme.palette.primary.main,
      borderColor: theme.palette.primary.main
    }
  }
}))

const GridItem = (
  {
    description,
    href,
    title
  }: {
    description: string,
    href: string,
    title: string
  }): ReactElement => {
  const classes = gridItemClasses();

  return (
    <Grid
      item
      sm={6}
      xs={12}
    >
      <Link
        href={href}
        style={{textDecoration: "none"}}
      >
        <Card
          className={classes.card}
          variant="outlined"
        >
          <CardContent>
            <Typography
              component="h3"
              gutterBottom
              variant="h3"
            >
              {title} &rarr;
            </Typography>
            <Typography variant="body1">
              {description}
            </Typography>
          </CardContent>
        </Card>
      </Link>
    </Grid>
  )
}

export default function MuiIndex(): ReactElement {
  return (
    <ThemeProvider theme={theme}>
      <Container
        maxWidth="md"
        style={{padding: "0 2.25rem"}}
      >
        <Grid
          alignItems="center"
          container
          direction="column"
          justify="center"
          style={{minHeight: "100vh"}}
          wrap="nowrap"
        >
          <CssBaseline />
          <Head>
            <title>Create Next App</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <Grid
            container
            direction="column"
            justify="center"
            spacing={4}
            style={{flex: 1}}
            wrap="nowrap"
          >
            <Grid
              item
              xs={12}
            >
              <Typography
                align="center"
                component="h1"
                gutterBottom
                variant="h1"
              >
                Welcome to <Link href="https://nextjs.org">Next.js!</Link>
              </Typography>
              <Typography
                align="center"
                paragraph
                variant="body1"
              >
                Get started by editing <Typography
                  style={{
                    backgroundColor: "#eeeeee",
                    borderRadius: "5px",
                    fontFamily: [
                      'Menlo',
                      'Monaco',
                      '"Lucida Console"',
                      '"Liberation Mono"',
                      '"DejaVu Sans Mono"',
                      '"Bitstream Vera Sans Mono"',
                      '"Courier New"',
                      'monospace'
                    ].join(', '),
                    padding: "0.25rem"
                  }}
                  component="code"
                >pages/index.js</Typography>
              </Typography>
            </Grid>
            <Grid item>
              <Grid
                container
                spacing={4}
                wrap="wrap"
              >
                <GridItem
                  description="Find in-depth information about Next.js features and API."
                  href="https://nextjs.org/docs"
                  title="Documentation"
                />
                <GridItem
                  description="Learn about Next.js in an interactive course with quizzes!"
                  href="https://nextjs.org/learn"
                  title="Learn"
                />
                <GridItem
                  description="Discover and deploy boilerplate example Next.js projects."
                  href="https://github.com/zeit/next.js/tree/master/examples"
                  title="Examples"
                />
                <GridItem
                  description="Instantly deploy your Next.js site to a public URL with Vercel."
                  href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                  title="Deploy"
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid
            alignItems="center"
            container
            style={{
              borderTop: "1px solid #eaeaea",
              height: "5em",
              marginTop: "2.5rem"
            }}
            wrap="nowrap"
          >
            <Grid item style={{textAlign: "center"}} xs={12}>
                <Link
                  href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{color: "inherit", textDecoration: "none"}}
                >
                  Powered by{' '}
                  <img
                    alt="Vercel Logo"
                    src="/vercel.svg"
                    style={{height: "1rem", margin: "-0.2rem 0"}}
                  />
                </Link>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  )
}
