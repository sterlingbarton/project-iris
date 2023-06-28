import { useState, useEffect } from 'react';
import Head from 'next/head';
import Box from '@mui/material/Box';
import TaskCard from '../components/TaskCard';
import { Task } from '@mui/icons-material';


export default function Tasks() {
    const [taskData, setTaskData] = useState([])

    const refetch = () => {
        fetch('/api/tasks')
        .then(r => r.json())
        .then(data => setTaskData(data))
    }

    useEffect(() => {
        fetch('/api/tasks')
        .then(r => r.json())
        .then(data => setTaskData(data))
    }, [])
  return (
    <Box>
        <Head>
            <title>IRIS | Tasks</title>
            <link rel="icon" href="/favicon.ico" /> 
        </Head>
        <TaskCard taskData={taskData} setTaskData={setTaskData} refetch={refetch}/>
    </Box>
  )
}
