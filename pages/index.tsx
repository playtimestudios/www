import {
  Box,
  Container,
  Typography
} from '@mui/material'

import Head from 'next/head';
import React, { ReactElement } from 'react';
import {Footer} from "../components/footer";
import {Header} from "../components/header";
import Grid from "@mui/material/Unstable_Grid2";
import {Contactform} from "../components/contact_form";
import CountUp from "react-countup";

export default function Index(): ReactElement {
  return (
    <>
      <Head>
        <title>Playtime Studios</title>
      </Head>
      <Box style={{ backgroundColor: "#222" }}>
        <Header />
        <Grid container justifyContent="center" p={2} pt={12}>
          <Grid container wrap="nowrap" sx={{ maxWidth: "100%", overflow: "hidden" }} spacing={2}>
            <Grid>
              <img alt="Patchwork" src="/apple-iphone-15-pro-max-2023-medium.png" height="458px" />
            </Grid>
            <Grid>
              <img alt="GOV.UK" src="/apple-macbook-pro-16-2021-medium.png" />
            </Grid>
          </Grid>
          <Grid container textAlign="center" maxWidth="md" p={2}>
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
          <Typography variant="h5" component="p">
            <strong>{new Date().getFullYear() - 2011} years experience</strong> working with some of the <strong>world&apos;s best known brands</strong>
          </Typography>
        </Grid>
      </Box>
      <Container maxWidth="lg">
        <Grid container py={4} spacing={4}>
          <Grid>
            <Typography gutterBottom variant="h2">
              Greater Value Faster
            </Typography>
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
        </Grid>
      </Container>
      <Box p={4} bgcolor="#222" color="#ff0096">
        <Grid container alignItems="center" justifyContent="center" columnSpacing={4} rowSpacing={2} textAlign="center">
          <Grid xs={12} md={3}>
            <Typography variant="h4" component="p" color="white">
              Reduce Costs
            </Typography>
            <Typography variant="h1" component="p">
              <CountUp enableScrollSpy={true} end={60} /><Typography variant="h3" component="span">%</Typography>
            </Typography>
          </Grid>
          <Grid>
            <Typography variant="h4" component="p" color="white">
              Increase Engagement
            </Typography>
            <Typography variant="h1" component="p">
              <CountUp enableScrollSpy={true} end={400} /><Typography variant="h3" component="span">%</Typography>
            </Typography>
          </Grid>
          <Grid xs={12} md={3}>
            <Typography variant="h4" component="p" color="white">
              Increase Revenue
            </Typography>
            <Typography variant="h1" component="p">
              <CountUp enableScrollSpy={true} end={800} /><Typography variant="h3" component="span">%</Typography>
            </Typography>
          </Grid>
        </Grid>
        <Grid xs={12} textAlign="center" pt={1}>
          <Typography variant="caption" component="p" color="lightgrey">
            Average versus clients&apos; previous provider
          </Typography>
        </Grid>
      </Box>
      <Container maxWidth="lg">
        <Grid container py={4} spacing={4}>
          <Grid>
            <Typography gutterBottom variant="h2">
              Realise Your Objectives
            </Typography>
            <Typography variant="h5" component="p">
              Whether you’re excited about a <strong>new idea</strong> or looking to grow an <strong>existing product</strong>, our <strong>comprehensive services</strong> and <strong>investment in your success</strong> have <strong>got you covered</strong>, <strong>realising your objectives with confidence</strong>.
            </Typography>
          </Grid>
          <Grid xs={12} md={6}>
            <Typography sx={{ textAlign: { md: "center" }}} gutterBottom variant="h3">Software Engineering</Typography>
            <Typography sx={{ textAlign: { md: "center" }}} gutterBottom variant="subtitle1">Building rock-solid software that solves your unique challenges</Typography>
            <p><img alt="Test" src="/scott-graham-5fNmWej4tAA-unsplash.jpg" style={{width: "100%"}} /></p>
            <Typography gutterBottom variant="body1">
              In today&apos;s digital world, innovative software is the backbone of any successful business. We&apos;re a team of passionate engineers who specialize in crafting custom software solutions tailored to your specific needs. We&apos;ll work closely with you to understand your goals, challenges, and target audience.  We then leverage our expertise in cutting-edge technologies to build secure, scalable, and user-friendly software that delivers real results.
            </Typography>
          </Grid>
          <Grid xs={12} md={6}>
            <Typography sx={{ textAlign: { md: "center" }}} gutterBottom variant="h3">Customer Development</Typography>
            <Typography sx={{ textAlign: { md: "center" }}} gutterBottom variant="subtitle1">Unlocking your full customer potential</Typography>
            <p><img alt="Test" src="/john-schnobrich-2FPjlAyMQTA-unsplash.jpg" style={{width: "100%"}} /></p>
            <Typography gutterBottom variant="body1">
              Do you know what your customers truly want and need? At Playtime Studios, our customer development experts help you bridge the gap between your business and your target audience. We utilize a data-driven approach to understand customer behavior, identify pain points, and develop strategies to acquire, retain, and grow your customer base.            </Typography>
          </Grid>
        </Grid>
      </Container>
      <Box style={{ border: 'solid black', borderWidth: '1px 0 1px' }} p={4}>
        <Grid container alignItems="center" justifyContent="center" columnSpacing={4} rowSpacing={2}>
          <Grid>
            <img
              alt="Apple"
              src="/Apple_logo_black.svg"
              style={{height: '3em'}}
            />
          </Grid>
          <Grid>
            <img
              alt="Google"
              src="/Google_%22G%22_logo.svg"
              style={{height: '3em'}}
            />
          </Grid>
          <Grid>
            <img
              alt="Meta"
              src="/Meta_Platforms_Inc._logo_(cropped).svg"
              style={{height: '3em'}}
            />
          </Grid>
          <Grid>
            <img
              alt="Microsoft"
              src="/Microsoft_logo.svg"
              style={{height: '3em'}}
            />
          </Grid>
        </Grid>
        <Grid xs={12} textAlign="center" pt={1}>
          <Typography variant="h5" component="p">
            <strong>Built</strong> in partnership <strong>with the world&apos;s leading technology</strong> companies
          </Typography>
        </Grid>
      </Box>
      <Container maxWidth="lg">
        <Grid container py={4} spacing={4}>
          <Grid>
            <Typography gutterBottom variant="h2">
              Working With Us
            </Typography>
            <Typography variant="h5" component="p">
              We believe in fostering a <strong>collaborative partnership</strong> with our clients. That&apos;s why we exclusively utilize a <strong>lean agile delivery</strong> model. This approach offers <strong>several key benefits</strong> for you:
            </Typography>
          </Grid>
          <Grid xs={6}>
            <Typography component="h3" variant="h4">
              Unmatched Transparency
            </Typography>
            <Typography variant="body1">
              We provide continuous access to review builds. This means you&apos;ll always see the latest progress and can provide feedback at every stage of development. No more surprises at launch!
            </Typography>
          </Grid>
          <Grid xs={6}>
            <Typography component="h3" variant="h4">
              Rapid Iteration
            </Typography>
            <Typography variant="body1">
              Lean agile allows for quick adjustments based on your input. We can prioritize features and adapt to changing needs, ensuring the final product aligns perfectly with your vision.
            </Typography>
          </Grid>
          <Grid xs={6}>
            <Typography component="h3" variant="h4">
              Reduced Risk
            </Typography>
            <Typography variant="body1">
              By working iteratively, we identify and address potential issues early on. This minimizes risk and keeps your project on track.
            </Typography>
          </Grid>
          <Grid xs={6}>
            <Typography component="h3" variant="h4">
              Predictable Costs
            </Typography>
            <Typography variant="body1">
              Our lean agile model leverages a daily charge structure. This provides you with clear cost visibility throughout the development process.
            </Typography>
          </Grid>
        </Grid>
        <img alt="Patchwork" src="/surface-GUPqey7k7b4-unsplash.jpg" width="100%"/>
      </Container>
      <Grid id="contact" bgcolor="#ff0096" container justifyContent="center" mt={4}>
        <Grid container maxWidth='sm' p={4} justifyContent="center">
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
