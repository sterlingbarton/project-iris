import Head from 'next/head';
// import styles from '../styles/Home.module.css';
import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import TaskCard from '../components/TaskCard';
import ApptCard from '../components/ApptCard';
import FinanceCard from '../components/FinanceCard';
import { GlobalState } from '../components/Layout';
import {useRouter} from 'next/router'


export default function Home() {
  const [taskData, setTaskData] = React.useState([])
  const [appointmentData, setAppointmentData] = React.useState([])
  const [financeData, setFinanceData] = React.useState([])

  React.useEffect(() => {
    fetch('/api/tasks')
    .then(r => r.json())
    .then(data => setTaskData(data))
    fetch('/api/appointments')
    .then(r => r.json())
    .then(data => setAppointmentData(data))
    fetch('/api/finances')
    .then(r => r.json())
    .then(data => setFinanceData(data))
  }, [])

  const globalState = React.useContext(GlobalState)

  const router = useRouter();

  return (
    <div>
         <Head>
            <title>IRIS | Home</title>
            <link rel="icon" href="/favicon.ico" /> 
        </Head>

      <main>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid xs={12} sm={4} onClick={() => router.push('/tasks')}>
            <TaskCard taskData={taskData}/>
          </Grid>
          <Grid xs={12} sm={4} onClick={() => router.push('/appointments')}>
            <ApptCard appointmentData={appointmentData}/>
          </Grid>
          <Grid xs={12} sm={4} onClick={() => router.push('/finances')}>
            <FinanceCard financeData={financeData}/>
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