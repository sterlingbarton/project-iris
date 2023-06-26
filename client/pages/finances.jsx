import { useState, useEffect } from 'react';
import Head from 'next/head';
import Box from '@mui/material/Box';
import FinanceCard from '../components/FinanceCard';

export default function Finances() {
    const [financeData, setFinanceData] = useState([])

    useEffect(() => {
        fetch('/api/finances')
        .then(r => r.json())
        .then(data => setFinanceData(data))
    }, [])
  return (
    <Box>
        <Head>
            <title>IRIS | Finances</title>
            <link rel="icon" href="/favicon.ico" /> 
        </Head>
        <FinanceCard financeData={financeData} setFinanceData={setFinanceData}/>
    </Box>
  )
}
