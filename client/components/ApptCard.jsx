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
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import Add from './Add';
import Edit from './Edit'
import moment from 'moment';


export default function AppointmentCard({appointmentData, setAppointmentData, refetch}) {
    const router = useRouter()

    const [open, setOpen] = React.useState(false);
    const [openEdit, setOpenEdit] = React.useState(false);
    const [currentId, setCurrentId] = React.useState(null)


    const handleOpenEdit = (id) => {
        setOpenEdit(!openEdit);
        setCurrentId(id)
    };

    const appointments = appointmentData.map((appointment, index) => 
        (
            <ListItem sx={{color:"text.secondary"}} key={index} button secondaryAction={
                router.pathname === '/appointments' && 
                (<ButtonGroup edge='end'>
                    <Button variant="outlined" size="small" color="primary" onClick={() => handleOpenEdit(appointment.id)}>Edit</Button>
                    <Button variant="outlined" size="small" color="primary" onClick={() => handleDeleteAppt(appointment.id)}>Delete</Button>
                </ButtonGroup>)
              }>
            <ListItemAvatar>
                <CalendarMonthRoundedIcon />
            </ListItemAvatar>
            <ListItemText primary={appointment.name} secondary={moment(appointment.due_by).format('LLL')} />
          </ListItem>
        )
    )

    function handleDeleteAppt(id){
        fetch(`/api/appointments/${id}` , {
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
                    Appointments
                </Typography>
                {router.pathname === '/appointments' && 
                    <Button variant="outlined" size="small" color="primary" onClick={handleClickOpen}>
                    +
                    </Button>
                }
            </Box>
          <Add open={open} setOpen={setOpen} type={'appointments'} appointmentData={appointmentData} setAppointmentData={setAppointmentData}/>
          <Edit openEdit={openEdit} setOpenEdit={setOpenEdit} type={'appointments'} appointmentData={appointmentData} setAppointmentData={setAppointmentData} currentId={currentId}/>
          <List>
            {appointments}
          </List>
        </CardContent>
    </Card>
  );
}