import * as React from 'react';
import Head from 'next/head';
import TaskCard from '../components/TaskCard';


export default function Tasks() {
    const [taskData, setTaskData] = React.useState([])

    const refetch = () => {
        fetch('/api/tasks')
        .then(r => r.json())
        .then(data => setTaskData(data))
    }

    React.useEffect(() => {
        fetch('/api/tasks')
        .then(r => r.json())
        .then(data => setTaskData(data))
    }, [])
  return (
    <>
        <Head>
            <title>IRIS | Tasks</title>
            <link rel="icon" href="/favicon.ico" /> 
        </Head>
        <main>
            <TaskCard taskData={taskData} setTaskData={setTaskData} refetch={refetch}/>
        </main>
    </>
  )
}
