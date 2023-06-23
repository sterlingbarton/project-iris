import Head from 'next/head';
import Box from '@mui/material/Box';


export default function Finances() {
  return (
    <Box>
        <Head>
            <title>IRIS | Finances</title>
            <link rel="icon" href="/favicon.ico" /> 
        </Head>
        <Box component='h2'>Finances</Box>
    </Box>
  )
}

// export async function getStaticProps() {
//     const res = await fetch('http://localhost:3001/finance');
//     const financeData = await res.json();
//     return {
//           props: {
//             financeData
//           },
//         }
//   }