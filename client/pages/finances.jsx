import * as React from 'react';
import Head from 'next/head';
import Box from '@mui/material/Box';
import FinanceCard from '../components/FinanceCard';


export default function Finances() {
    const [financeData, setFinanceData] = React.useState([])

    const refetch = () => {
        fetch('/api/finances')
        .then(r => r.json())
        .then(data => setFinanceData(data))
    }

    React.useEffect(() => {
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
        <main>
            <FinanceCard financeData={financeData} setFinanceData={setFinanceData} refetch={refetch}/>
        </main>
    </Box>
  )
}


