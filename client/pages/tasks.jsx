import Head from 'next/head';
import Box from '@mui/material/Box';


export default function Tasks() {
  return (
    <Box>
        <Head>
            <title>IRIS | Tasks</title>
            <link rel="icon" href="/favicon.ico" /> 
        </Head>
        <Box component='h2'>Tasks</Box>
    </Box>
  )
}

// export async function getStaticProps() {
//     const res = await fetch('http://localhost:3001/tasks');
//     const taskData = await res.json();
//     return {
//         props: {
//           taskData,
//         }
//     }
// }