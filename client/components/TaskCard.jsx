import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Button, ButtonGroup } from '@mui/material';
import Add from './Add';

export default function TaskCard({taskData, setTaskData}) {
    const [open, setOpen] = React.useState(false);

    console.log(taskData)

    const tasks = taskData.map((task) => {
        return <Box variant='li' key={task.id}>
        <Typography variant='h4'>{task.due_by}</Typography>
        <Typography variant='p'>{task.name}</Typography>
        <ButtonGroup>
            <Button variant="outlined" size="small" color="primary" onClick={handleEditTask}>Edit</Button>
            <Button variant="outlined" size="small" color="primary" onClick={handleDeleteTask}>Delete</Button>
        </ButtonGroup>
        </Box>
    })
    
    function handleEditTask(){
        console.log('need to add edit task functionality')
    }

    function handleDeleteTask(){
    //     fetch(`/api/tasks/${task.id}` , {
    //         method: 'DELETE',
    //     })
    //     .then((r) => r.json())
    //     .then(data => setTaskData(...taskData, data))
    }

    const handleClickOpen = () => {
        setOpen(!open);
      };
  return (
    <Card 
    sx={{ maxWidth: 345 }} 
    >
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Tasks
          </Typography>
            <Button variant="outlined" size="small" color="primary" onClick={handleClickOpen}>
            +
            </Button>
            <Add open={open} setOpen={setOpen}/>
          <Typography variant="ul" color="text.secondary">
            {tasks}
          </Typography>
        </CardContent>
    </Card>
  );
}