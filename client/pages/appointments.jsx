import { useState, useEffect } from 'react';
import Head from 'next/head';
import Box from '@mui/material/Box';
import ApptCard from '../components/ApptCard';


export default function Appointments() {
    const [appointmentData, setAppointmentData] = useState([])

    const refetch = () => {
        fetch('/api/appointments')
        .then(r => r.json())
        .then(data => setAppointmentData(data))
    }

    useEffect(() => {
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
        <ApptCard appointmentData={appointmentData} setAppointmentData={setAppointmentData} refetch={refetch}/>
    </Box>
  )
}

