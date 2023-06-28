import * as React from 'react';
import {useRouter} from 'next/router';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Button, ButtonGroup } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import TaskRoundedIcon from '@mui/icons-material/TaskRounded';
import Add from './Add';
import Edit from './Edit'
import moment from 'moment';


export default function TaskCard({taskData, setTaskData, refetch}) {
    const router = useRouter()

    const [open, setOpen] = React.useState(false);
    const [openEdit, setOpenEdit] = React.useState(false);
    const [currentId, setCurrentId] = React.useState(null)

    const handleOpenEdit = (id) => {
        setOpenEdit(!openEdit);
        setCurrentId(id)
    };

    const tasks = taskData.map((task, index) => 
            (
            <ListItem sx={{color:"text.secondary"}} key={index} button secondaryAction={
                router.pathname === '/tasks' && 
                (<ButtonGroup edge='end'>
                    <Button variant="outlined" size="small" color="primary" onClick={() => handleOpenEdit(task.id)}>Edit</Button>
                    <Button variant="outlined" size="small" color="primary" onClick={() => handleDeleteTask(task.id)}>Delete</Button>
                </ButtonGroup>)
              }>
            <ListItemAvatar>
                <TaskRoundedIcon/>
            </ListItemAvatar>
            <ListItemText primary={task.name} secondary={moment(task.due_by).format('LLL')} />
          </ListItem>
        )
    )

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
    <Card sx={{ 
        minWidth: '415px', 
        maxWidth: '700px',
        m: '3rem auto'
    }}>
        <CardContent>
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <Typography gutterBottom variant="h5" component="div">
                    Tasks
                </Typography>
                {router.pathname === '/tasks' && 
                    <Button variant="outlined" size="small" color="primary" onClick={handleClickOpen}>
                    +
                    </Button>
                }
            </Box>
            <Add open={open} setOpen={setOpen} type={'tasks'} taskData={taskData} setTaskData={setTaskData}/>
            <Edit openEdit={openEdit} setOpenEdit={setOpenEdit} type={'tasks'} taskData={taskData} setTaskData={setTaskData} currentId={currentId}/>
          <List>
            {tasks}
          </List>
        </CardContent>
    </Card>
  );
}