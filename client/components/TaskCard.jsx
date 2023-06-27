import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Button, ButtonGroup } from '@mui/material';
import Add from './Add';
import Edit from './Edit'


export default function TaskCard({taskData, setTaskData}) {
    const [open, setOpen] = React.useState(false);
    const [openEdit, setOpenEdit] = React.useState(false);

    const handleOpenEdit = () => {
        setOpenEdit(!openEdit);
    };

    const tasks = taskData.map((task) => {
        return <Box variant='li' key={task.id}>
        <Typography variant='h4'>{task.due_by}</Typography>
        <Typography variant='p'>{task.name}</Typography>
        <ButtonGroup>
            <Button variant="outlined" size="small" color="primary" onClick={handleOpenEdit}>Edit</Button>
            <Button variant="outlined" size="small" color="primary" onClick={handleDeleteTask}>Delete</Button>
        </ButtonGroup>
        </Box>
    })

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
    <Card sx={{ maxWidth: 345 }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Tasks
          </Typography>
            <Button variant="outlined" size="small" color="primary" onClick={handleClickOpen}>
            +
            </Button>
            <Add open={open} setOpen={setOpen} type={'tasks'}/>
            <Edit openEdit={openEdit} setOpenEdit={setOpenEdit} type={'tasks'} taskData={taskData} setTaskData={setTaskData}/>
          <Typography variant="ul" color="text.secondary">
            {tasks}
          </Typography>
        </CardContent>
    </Card>
  );
}