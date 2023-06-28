import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Button, ButtonGroup } from '@mui/material';
import Add from './Add';
import Edit from './Edit'
import moment from 'moment';


export default function AppointmentCard({appointmentData, setAppointmentData, refetch}) {
    const [open, setOpen] = React.useState(false);
    const [openEdit, setOpenEdit] = React.useState(false);
    const [currentId, setCurrentId] = React.useState(null)


    const handleOpenEdit = (id) => {
        setOpenEdit(!openEdit);
        setCurrentId(id)
    };

    const appointments = appointmentData.map(appointment => {
        return <Box variant='li' key={appointment.id}>
        <Typography variant='h4'>{moment(appointment.due_by).format('LLL')}</Typography>
        <Typography variant='p'>{appointment.name}</Typography>
        <ButtonGroup>
            <Button variant="outlined" size="small" color="primary" onClick={() => handleOpenEdit(appointment.id)}>Edit</Button>
            <Button variant="outlined" size="small" color="primary" onClick={() => handleDeleteAppt(appointment.id)}>Delete</Button>
        </ButtonGroup>
        </Box>
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
    <Card sx={{ maxWidth: 345 }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Appointments
          </Typography>
          <Button variant="outlined" size="small" color="primary" onClick={handleClickOpen}>
          +
          </Button>
          <Add open={open} setOpen={setOpen} type={'appointments'} appointmentData={appointmentData} setAppointmentData={setAppointmentData}/>
          <Edit openEdit={openEdit} setOpenEdit={setOpenEdit} type={'appointments'} appointmentData={appointmentData} setAppointmentData={setAppointmentData} currentId={currentId}/>
          <Typography variant="ul" color="text.secondary">
            {appointments}
          </Typography>
        </CardContent>
    </Card>
  );
}