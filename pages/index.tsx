import {
  Box,
  Button, Container, Typography
} from '@mui/material'

import Head from 'next/head';
import React, { ReactElement } from 'react';
import {Footer} from "../components/footer";
import {Header} from "../components/header";
import Grid from "@mui/material/Unstable_Grid2";
import {Contactform} from "../components/contact_form";

export default function Index(): ReactElement {
  return (
    <>
      <Head>
        <title>Playtime Studios</title>
      </Head>
      <Box style={{ backgroundColor: "#222" }}>
        <Box p={2}>
          <Header />
        </Box>
        <Grid container justifyContent="center" spacing={2} p={2}>
          <Grid container wrap="nowrap" sx={{ maxWidth: "100%", overflow: "hidden" }}>
            <Grid>
              <img alt="Patchwork" src="/apple-iphone-15-pro-max-2023-medium.png" height="458px" />
            </Grid>
            <Grid>
              <img alt="GOV.UK" src="/apple-macbook-pro-16-2021-medium.png" />
            </Grid>
          </Grid>
          <Grid container textAlign="center" maxWidth="md">
            <Grid>
              <Typography style={{ color: "#fff" }} gutterBottom variant="h4" component="p">
                Apps & Websites
              </Typography>
              <Typography style={{ color: '#ff0096' }} gutterBottom variant="h2">
                Engineered for Engagement
              </Typography>
              <Typography style={{ color: "#fff" }} variant="h4" component="p">
                Creative solutions that delight customers, increase engagement, and grow businesses
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Box style={{ borderBottom: '1px solid black' }} p={4}>
        <Grid container alignItems="center" justifyContent="center" columnSpacing={4} rowSpacing={2}>
          <Grid>
            <img
              alt="BMW"
              src="/bmw.svg"
              style={{height: '3em'}}
            />
          </Grid>
          <Grid>
            <img
              alt="Playtime Studios"
              src="/citizens-advice.svg"
              style={{height: '3em'}}
            />
          </Grid>
          <Grid>
            <img
              alt="HM Government"
              src="/hm-government.svg"
              style={{height: '3em'}}
            />
          </Grid>
          <Grid>
            <img
              alt="Money Helper"
              src="/money-helper.svg"
              style={{height: '3em'}}
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
        <Grid xs={12} textAlign="center" pt={1}>
          <Typography variant="h5">
            <strong>{new Date().getFullYear() - 2011} years experience</strong> working with some of the <strong>world&apos;s best known brands</strong>
          </Typography>
        </Grid>
      </Box>
      <Container maxWidth="lg">
        <Grid container py={4} spacing={4}>
          <Grid>
            <Grid container justifyContent="space-between" sx={{ flexDirection: { xs: "column-reverse", md: "row" }}}>
              <Grid>
                <Typography gutterBottom variant="h2">
                  Greater Value Faster
                </Typography>
              </Grid>
              <Grid>
                <Typography gutterBottom variant="h2" component="div">
                  <Button variant="contained" disableRipple href="#contact">Contact Us</Button>
                </Typography>
              </Grid>
            </Grid>
            <Typography gutterBottom variant="h5" component="p">
              <strong>Next-level creativity</strong> combined with a <strong>holistic data-driven approach</strong> to engineering solutions across
              the <strong>entire technology stack</strong> and <strong>product lifecycle</strong> ensures <strong>unrivalled customer engagement</strong> and <strong>business
              value</strong>.
            </Typography>
            <Typography variant="h5" component="p">
              Relentlessly pursuing efficiency enables <strong>high velocity</strong> iterations and <strong>rapid delivery</strong>.
            </Typography>
          </Grid>
          <Grid>
            <img alt="Patchwork" src="/marvin-meyer-SYTO3xs06fU-unsplash.jpg" width="100%"/>
          </Grid>
          <Grid>
            <Grid container justifyContent="space-between" sx={{ flexDirection: { xs: "column-reverse", md: "row" }}}>
              <Grid>
                <Typography gutterBottom variant="h2">
                  Realise Your Objectives
                </Typography>
              </Grid>
              <Grid sx={{ display: { xs: "none", md: "block" }}}>
                <Typography gutterBottom variant="h2" component="div">
                  <Button variant="contained" disableRipple href="#contact">Contact Us</Button>
                </Typography>
              </Grid>
            </Grid>
            <Typography variant="h5" component="p">
              Whether you’re excited about a <strong>new idea</strong> or looking to grow an <strong>existing product</strong>, our <strong>comprehensive services</strong> and <strong>investment in your success</strong> have <strong>got you covered</strong>, <strong>realising your objectives with confidence</strong>.
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={4}>
          <Grid xs={12} md={6}>
            <Typography gutterBottom variant="h3" component="div" sx={{ display: { xs: "block", md: "none" }}}>
              <Button variant="contained" disableRipple href="#contact">Contact Us</Button>
            </Typography>
            <Typography sx={{ textAlign: { md: "center" }}} gutterBottom variant="h3">Software Engineering</Typography>
            <Typography sx={{ textAlign: { md: "center" }}} gutterBottom variant="subtitle1">Building rock-solid software that solves your unique challenges</Typography>
            <p><img alt="Test" src="/scott-graham-5fNmWej4tAA-unsplash.jpg" style={{width: "100%"}} /></p>
            <Typography gutterBottom variant="body1">
              In today&apos;s digital world, innovative software is the backbone of any successful business. We&apos;re a team of passionate engineers who specialize in crafting custom software solutions tailored to your specific needs. We&apos;ll work closely with you to understand your goals, challenges, and target audience.  We then leverage our expertise in cutting-edge technologies to build secure, scalable, and user-friendly software that delivers real results.
            </Typography>
          </Grid>
          <Grid xs={12} md={6}>
            <Typography gutterBottom variant="h3" component="div" sx={{ display: { xs: "block", md: "none" }}}>
              <Button variant="contained" disableRipple href="#contact">Contact Us</Button>
            </Typography>
            <Typography sx={{ textAlign: { md: "center" }}} gutterBottom variant="h3">Customer Development</Typography>
            <Typography sx={{ textAlign: { md: "center" }}} gutterBottom variant="subtitle1">Unlocking your full customer potential</Typography>
            <p><img alt="Test" src="/john-schnobrich-2FPjlAyMQTA-unsplash.jpg" style={{width: "100%"}} /></p>
            <Typography gutterBottom variant="body1">
              Do you know what your customers truly want and need? At Playtime Studios, our customer development experts help you bridge the gap between your business and your target audience. We utilize a data-driven approach to understand customer behavior, identify pain points, and develop strategies to acquire, retain, and grow your customer base.            </Typography>
          </Grid>
        </Grid>
      </Container>
      <Grid id="contact" mt={2} bgcolor="#ff0096" container justifyContent="center" style={{position: "relative", width: "100vw", left: "calc(-50vw + 50%)"}}>
        <Grid container maxWidth='sm' px={4} pt={4} pb={2} spacing={4} justifyContent="center">
          <Grid>
            <Contactform />
          </Grid>
        </Grid>
      </Grid>
      <Grid>
        <Footer/>
      </Grid>
    </>
  )
}
