import React from 'react'
import Head from "next/head";
import Link from "next/Link";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Unauthorized() {
  return (
    <>
    <Head>
        <title>IRIS | Unauthorized</title>
        <link rel="icon" href="/favicon.ico" />
    </Head>
    <main>
        <Box sx={{'margin': '2em'}}>
            <Typography variant='h2' gutterBottom>Unauthorized</Typography>
            <Typography variant='p'>Please&nbsp;<Link href={'/login'}>Login</Link> to view this page.</Typography>
        </Box>
    </main>
    </>
  )
}

