import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Button, ButtonGroup } from '@mui/material';

export default function AppointmentCard({appointmentData, setAppointmentData}) {
    console.log(appointmentData)

    const appointments = appointmentData.map(appointment => {
        return <Box variant='li' key={appointment.id}>
        <Typography variant='h4'>{appointment.due_by}</Typography>
        <Typography variant='p'>{appointment.name}</Typography>
        <ButtonGroup>
            <Button variant="outlined" size="small" color="primary" onClick={handleEditAppt}>Edit</Button>
            <Button variant="outlined" size="small" color="primary" onClick={handleDeleteAppt}>Delete</Button>
        </ButtonGroup>
        </Box>
    })

    function handleEditAppt(){
        console.log('need to add edit appt functionality')
    }

    function handleDeleteAppt(){
    //     fetch(`/api/appointments/${appointment.id}` , {
    //         method: 'DELETE',
    //     })
    //     .then((r) => r.json())
    //     .then(data => setAppointmentData(...appointmentData, data))
    }

    function handleAddAppt(){
        console.log('add new dialog for this')
    }
  return (
    <Card sx={{ maxWidth: 345 }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Appointments
          </Typography>
          <Button variant="outlined" size="small" color="primary" onClick={handleAddAppt}>
          +
          </Button>
          <Typography variant="body2" color="text.secondary">
            {appointments}
          </Typography>
        </CardContent>
    </Card>
  );
}