import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import TextField from '@mui/material/TextField';
import { DateTimeField } from '@mui/x-date-pickers/DateTimeField';


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Edit({
    openEdit, 
    setOpenEdit, 
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

  const handleClose = () => {
    setOpenEdit(!openEdit);
  };

  function handleChange(e) {
    setFormData({
        ...formData,
        [e.target.name]: e.target.value
    })
  } 

  function handleEdit(e){
    handleClose()
    e.preventDefault()
    if (type == 'tasks'){
        console.log(type, formData)
        // fetch(`/api/tasks/${id}`, {
        //     method: 'PATCH',
        //     headers: {'Content-Type': 'application/json'},
        //     body: JSON.stringify(formData)
        // })
        // .then((r) => {
        //   if (r.ok){
        //     r.json()
        //   }
        //   else{
        //     console.log('Failed to update task')
        //   }
        // })
        // .then(data => setTaskData(...taskData, data))
    }else if(type == 'finances'){
        console.log(type, formData)
        // fetch(`/api/finances/${id}`, {
        //     method: 'PATCH',
        //     headers: {'Content-Type': 'application/json'},
        //     body: JSON.stringify(formData)
        // })
        // .then((r) => {
        //   if (r.ok){
        //     r.json()
        //   }
        //   else{
        //     console.log('Failed to update finance')
        //   }
        // })
        // .then(data => setFinanceData(...financeData, data))
    }else if(type == 'appointments'){
        console.log(type, formData)
        // fetch(`/api/appointments/${id}`, {
        //     method: 'PATCH',
        //     headers: {'Content-Type': 'application/json'},
        //     body: JSON.stringify(formData)
        // })
        // .then((r) => {
        //   if (r.ok){
        //     r.json()
        //   }
        //   else{
        //     console.log('Failed to update appointment')
        //   }
        // })
        // .then(data => setAppointmentData(...appointmentData, data))
    }
  }

  return (
      <Dialog
        open={openEdit}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>Edit</DialogTitle>
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
          <Button onClick={handleEdit}>Save</Button>
        </DialogActions>
      </Dialog>
  );
}