import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Button, ButtonGroup } from '@mui/material';
import Add from './Add';
import Edit from './Edit'
import moment from 'moment';


export default function TaskCard({taskData, setTaskData, refetch}) {
    const [open, setOpen] = React.useState(false);
    const [openEdit, setOpenEdit] = React.useState(false);
    const [currentId, setCurrentId] = React.useState(null)

    const handleOpenEdit = (id) => {
        setOpenEdit(!openEdit);
        setCurrentId(id)
    };

    const tasks = taskData.map((task) => {
        return <Box variant='li' key={task.id}>
        <Typography variant='h4'>{moment(task.due_by).format('LLL')}</Typography>
        <Typography variant='p'>{task.name}</Typography>
        <ButtonGroup>
            <Button variant="outlined" size="small" color="primary" onClick={() => handleOpenEdit(task.id)}>Edit</Button>
            <Button variant="outlined" size="small" color="primary" onClick={() => handleDeleteTask(task.id)}>Delete</Button>
        </ButtonGroup>
        </Box>
    })

    function handleDeleteTask(id){
        fetch(`/api/tasks/${id}` , {
            method: 'DELETE',
        })
        .then(() => refetch())
    }

    const handleClickOpen = () => {
        setOpen(!open);
      };

  return (
    <Card sx={{ maxWidth: 345 }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Tasks
          </Typography>
            <Button variant="outlined" size="small" color="primary" onClick={handleClickOpen}>
            +
            </Button>
            <Add open={open} setOpen={setOpen} type={'tasks'} taskData={taskData} setTaskData={setTaskData}/>
            <Edit openEdit={openEdit} setOpenEdit={setOpenEdit} type={'tasks'} taskData={taskData} setTaskData={setTaskData} currentId={currentId}/>
          <Typography variant="ul" color="text.secondary">
            {tasks}
          </Typography>
        </CardContent>
    </Card>
  );
}