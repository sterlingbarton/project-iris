import * as React from 'react';
import Head from 'next/head';
import Box from '@mui/material/Box';
import {useRouter} from 'next/router';
import FinanceCard from '../components/FinanceCard';

export default function Finances() {
    const router = useRouter()

    const [financeData, setFinanceData] = React.useState([])

    const refetch = () => {
        fetch('/api/finances')
        .then(r => r.json())
        .then(data => setFinanceData(data))
    }

    React.useEffect(() => {
        fetch('/api/finances')
        .then((r) => {
            if(!r.ok){
                router.push('/unauthorized')
                return []
            }else{
                return r.json()
            }})
        .then(data => setFinanceData(data))
    }, [])
    
  return (
    <>
        <Head>
            <title>IRIS | Finances</title>
            <link rel="icon" href="/favicon.ico" /> 
        </Head>
        <main>
            <Box sx={{ marginTop: '7rem' }}>
                <FinanceCard financeData={financeData} setFinanceData={setFinanceData} refetch={refetch}/>
            </Box>
        </main>
    </>
  )
}


