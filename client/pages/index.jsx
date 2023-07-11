import * as React from 'react';
import Head from 'next/head';
import {useRouter} from 'next/router'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import TaskCard from '../components/TaskCard';
import ApptCard from '../components/ApptCard';
import FinanceCard from '../components/FinanceCard';

export default function Home() {
  const router = useRouter();

  const [taskData, setTaskData] = React.useState([])
  const [appointmentData, setAppointmentData] = React.useState([])
  const [financeData, setFinanceData] = React.useState([])

  React.useEffect(() => {
    fetch('/api/tasks')
    .then((r) => {
      if(!r.ok){
          router.push('/unauthorized')
          return []
      }else{
          return r.json()
      }})
    .then(data => setTaskData(data))
    fetch('/api/appointments')
    .then((r) => {
      if(!r.ok){
          return []
      }else{
          return r.json()
      }})
    .then(data => setAppointmentData(data))
    fetch('/api/finances')
    .then((r) => {
      if(!r.ok){
          return []
      }else{
          return r.json()
      }})
    .then(data => setFinanceData(data))
  }, [])

  return (
    <div>
         <Head>
            <title>IRIS | Home</title>
            <link rel="icon" href="/favicon.ico" /> 
        </Head>

      <main>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid xs={12} onClick={() => router.push('/tasks')}>
            <TaskCard taskData={taskData} setTaskData={setTaskData}/>
          </Grid>
          <Grid xs={12} onClick={() => router.push('/appointments')}>
            <ApptCard appointmentData={appointmentData} setAppointmentData={setAppointmentData}/>
          </Grid>
          <Grid xs={12} onClick={() => router.push('/finances')}>
            <FinanceCard financeData={financeData} setFinanceData={setFinanceData}/>
          </Grid>
          <Grid xs={12}>
            <Typography variant="h6" gutterBottom>
            Google Calendar
            </Typography>
          </Grid>
          <Grid xs={12}>
            <Typography variant="h6" gutterBottom>
            News
            </Typography>
          </Grid>
          <Grid xs={12}>
            <Typography variant="h6" gutterBottom>
            Weather
            </Typography>
          </Grid>
        </Grid>
      </Box>
      </main>
    </div>
  )
}