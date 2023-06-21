import Head from 'next/head';
// import styles from '../styles/Home.module.css';
import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import TaskCard from '../components/TaskCard';
import ApptCard from '../components/ApptCard';
import FinanceCard from '../components/FinanceCard';


export default function Home(pageProps) {
  // console.log(pageProps)

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
            <TaskCard />
          </Grid>
          <Grid xs={12} sm={4}>
            <ApptCard />
          </Grid>
          <Grid xs={12} sm={4}>
            <FinanceCard />
          </Grid>
          <Grid xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
            Google Calendar
            </Typography>
          </Grid>
          <Grid xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
            News
            </Typography>
          </Grid>
          <Grid xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
            Weather
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

// export async function getServerSideProps() {
//   const res1 = await fetch('http://localhost:5555/tasks');
//   const taskData = await res1.json();
//   const res2 = await fetch('http://localhost:5555/appointments');
//   const appointmentData = await res2.json();
//   const res3 = await fetch('http://localhost:5555/finances');
//   const financeData = await res3.json();
//   return {
//     props: {
//       taskData,
//       appointmentData,
//       financeData
//     },
//   }

// }