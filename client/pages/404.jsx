import Head from "next/head";
import Link from "next/Link";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';



export default function NotFound() {

    return ( 
        <>
        <Head>
            <title>IRIS | Page not found</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
            <Box sx={{'margin': '2em'}}>
                <Typography variant='h1'>Oooops...</Typography>
                <Typography variant='h2'>This page cannot be found.</Typography>
                <Typography variant='p'>Go back to&nbsp;<Link href={'/'}>Home</Link></Typography>
            </Box>
        </main>
        </>
     );
}