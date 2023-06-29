import * as React from 'react';
import {useRouter} from 'next/router';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Button, ButtonGroup } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import DeleteIcon from '@mui/icons-material/Delete';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import Add from './Add';
import Edit from './Edit';
import { GlobalState } from '../components/Layout';
import moment from 'moment';


export default function AppointmentCard({appointmentData, setAppointmentData, refetch}) {
    const router = useRouter()

    const [open, setOpen] = React.useState(false);
    const [openEdit, setOpenEdit] = React.useState(false);
    const [currentId, setCurrentId] = React.useState(null)

    const globalState = React.useContext(GlobalState)

    const today = moment().format("MMM Do YYYY")

    const handleOpenEdit = (id) => {
        setOpenEdit(!openEdit);
        setCurrentId(id)
    };

    const appointments = appointmentData.map((appointment, index) => {
        if(today === moment(appointment.due_by).format("MMM Do YYYY") && globalState.state.user.id === appointment.user_id){
            return(
                <ListItem sx={{color:"text.secondary"}} key={index} button secondaryAction={
                    router.pathname === '/appointments' && 
                    (<ButtonGroup edge='end'>
                        <Button variant="outlined" size="small" color="primary" onClick={() => handleOpenEdit(appointment.id)}>Edit</Button>
                        <Button variant="outlined" size="small" color="primary" startIcon={<DeleteIcon />} onClick={() => handleDeleteAppt(appointment.id)}>Delete</Button>
                    </ButtonGroup>)
                  }>
                <ListItemAvatar>
                    <CalendarMonthRoundedIcon />
                </ListItemAvatar>
                <ListItemText primary={appointment.name} secondary={moment(appointment.due_by).format('LLL')} />
              </ListItem>
            )
        }
    })

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
                    <IconButton variant="outlined" size="small" color="primary" onClick={handleClickOpen}>
                        <AddRoundedIcon />
                    </IconButton>
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