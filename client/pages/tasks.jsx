import * as React from 'react';
import Head from 'next/head';
import Box from '@mui/material/Box';
import {useRouter} from 'next/router';
import TaskCard from '../components/TaskCard';


export default function Tasks() {
    const router = useRouter()

    const [taskData, setTaskData] = React.useState([])

    const refetch = () => {
        fetch('/api/tasks')
        .then(r => r.json())
        .then(data => setTaskData(data))
    }

    React.useEffect(() => {
        fetch('/api/tasks')
        .then((r) => {
            if(!r.ok){
                router.push('/unauthorized')
                return []
            }else{
                return r.json()
            }})
        .then(data => setTaskData(data))
    }, [])
    
  return (
    <>
        <Head>
            <title>IRIS | Tasks</title>
            <link rel="icon" href="/favicon.ico" /> 
        </Head>
        <main>
            <Box sx={{ marginTop: '7rem' }}>
                <TaskCard taskData={taskData} setTaskData={setTaskData} refetch={refetch}/>
            </Box>
        </main>
    </>
  )
}
