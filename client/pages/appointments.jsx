import Head from 'next/head';
import Box from '@mui/material/Box';


export default function Appointments() {
  return (
    <Box>
        <Head>
            <title>IRIS | Appointments</title>
            <link rel="icon" href="/favicon.ico" /> 
        </Head>
        <Box component='h2'>Appointments</Box>
    </Box>
  )
}


// export async function getStaticProps() {
//     const res = await fetch('http://localhost:3001/appointments');
//     const appointmentData = await res.json();
//     return {
//       props: {
//         appointmentData
//       },
//     }
//   }
