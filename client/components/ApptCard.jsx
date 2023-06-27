import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Button, ButtonGroup } from '@mui/material';
import Add from './Add';
import Edit from './Edit'

export default function AppointmentCard({appointmentData, setAppointmentData}) {
    const [open, setOpen] = React.useState(false);
    const [openEdit, setOpenEdit] = React.useState(false);

    const handleOpenEdit = () => {
        setOpenEdit(!openEdit);
    };

    const appointments = appointmentData.map(appointment => {
        return <Box variant='li' key={appointment.id}>
        <Typography variant='h4'>{appointment.due_by}</Typography>
        <Typography variant='p'>{appointment.name}</Typography>
        <ButtonGroup>
            <Button variant="outlined" size="small" color="primary" onClick={handleOpenEdit}>Edit</Button>
            <Button variant="outlined" size="small" color="primary" onClick={handleDeleteAppt}>Delete</Button>
        </ButtonGroup>
        </Box>
    })

    function handleDeleteAppt(){
    //     fetch(`/api/appointments/${appointment.id}` , {
    //         method: 'DELETE',
    //     })
    //     .then((r) => r.json())
    //     .then(data => setAppointmentData(...appointmentData, data))
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
          <Add open={open} setOpen={setOpen} type={'appointments'}/>
          <Edit openEdit={openEdit} setOpenEdit={setOpenEdit} type={'appointments'} appointmentData={appointmentData} setAppointmentData={setAppointmentData}/>
          <Typography variant="ul" color="text.secondary">
            {appointments}
          </Typography>
        </CardContent>
    </Card>
  );
}