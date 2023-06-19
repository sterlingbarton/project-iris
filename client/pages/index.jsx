import Head from 'next/head';
// import styles from '../styles/Home.module.css';
import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';


export default function Home() {
  // fetch('/hello')
  // .then(r => r.json())
  // .then(data => console.log(data))
  return (
    <div>
         <Head>
            <title>IRIS | Home</title>
            <link rel="icon" href="/favicon.ico" /> 
        </Head>

      <main>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
            h6. Heading
            </Typography>
          </Grid>
          <Grid xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
            h6. Heading
            </Typography>
          </Grid>
          <Grid xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
            h6. Heading
            </Typography>
          </Grid>
          <Grid xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
            h6. Heading
            </Typography>
          </Grid>
          <Grid xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
            h6. Heading
            </Typography>
          </Grid>
          <Grid xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
            h6. Heading
            </Typography>
          </Grid>
        </Grid>
      </Box>
      </main>

      <footer>
      </footer>
    </div>
  )
}
