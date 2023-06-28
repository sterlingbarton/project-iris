import * as React from 'react';
import Head from 'next/head';
import Box from '@mui/material/Box';
import ApptCard from '../components/ApptCard';


export default function Appointments() {
    const [appointmentData, setAppointmentData] = React.useState([])

    const refetch = () => {
        fetch('/api/appointments')
        .then(r => r.json())
        .then(data => setAppointmentData(data))
    }

    React.useEffect(() => {
        fetch('/api/appointments')
        .then(r => r.json())
        .then(data => setAppointmentData(data))
    }, [])
  return (
    <Box>
        <Head>
            <title>IRIS | Appointments</title>
            <link rel="icon" href="/favicon.ico" /> 
        </Head>
        <main>
            <ApptCard appointmentData={appointmentData} setAppointmentData={setAppointmentData} refetch={refetch}/>
        </main>
    </Box>
  )
}

