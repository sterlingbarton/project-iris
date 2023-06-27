import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import TextField from '@mui/material/TextField';
import { DateTimeField } from '@mui/x-date-pickers/DateTimeField';
import { format, isAfter } from 'date-fns'


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Add({
    open, 
    setOpen, 
    type,
    taskData, 
    setTaskData, 
    appointmentData, 
    setAppointmentData, 
    financeData, 
    setFinanceData
  }) {
    const [formData, setFormData] = React.useState({
        id: "",
        name: "",
        due_by: "",
    })

  const today = new Date();
  const formattedDate = format(today, 'yyyy/MM/dd')

  function handleChange(e) {
    setFormData({
        ...formData,
        [e.target.name]: e.target.value
    })
  } 

  const handleClose = () => {
    setOpen(!open);
  };

  function handleAdd(e){
    handleClose()
    e.preventDefault()
    if (type == 'tasks'){
        console.log(type, formData)
         // fetch(`/api/tasks`, {
        //     method: 'POST',
        //     headers: {'Content-Type': 'application/json'},
        //     body: JSON.stringify(formData)
        // })
        // .then((r) => {
        //   if (r.ok){
        //     r.json()
        //   }
        //   else{
        //     console.log('Failed to add task')
        //   }
        // })
        // .then(data => setTaskData(...taskData, data))
    }else if(type == 'finances'){
        console.log(type, formData)
        // fetch(`/api/finances`, {
        //     method: 'POST',
        //     headers: {'Content-Type': 'application/json'},
        //     body: JSON.stringify(formData)
        // })
        // .then((r) => {
        //   if (r.ok){
        //     r.json()
        //   }
        //   else{
        //     console.log('Failed to add finance')
        //   }
        // })
        // .then(data => setFinanceData(...financeData, data))
    }else if(type == 'appointments'){
        console.log(type, formData)
        // fetch(`/api/appointments`, {
        //     method: 'POST',
        //     headers: {'Content-Type': 'application/json'},
        //     body: JSON.stringify(formData)
        // })
        // .then((r) => {
        //   if (r.ok){
        //     r.json()
        //   }
        //   else{
        //     console.log('Failed to add appointment')
        //   }
        // })
        // .then(data => setAppointmentData(...appointmentData, data))
    }
  }

  return (
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>Add</DialogTitle>
        <DialogContent>
         <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            name='name'
            fullWidth
            variant="standard"
            value={formData.name}
            onChange={handleChange}
          />
           <DateTimeField 
           name='due_by'
        //    value={formData.due_by}
        //    onChange={handleChange}
           />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleAdd}>Add</Button>
        </DialogActions>
      </Dialog>
  );
}