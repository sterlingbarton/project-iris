import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import TextField from '@mui/material/TextField';
import { DateTimeField } from '@mui/x-date-pickers/DateTimeField';
import Alert from '@mui/material/Alert';
import { format, isAfter } from 'date-fns'
import moment from 'moment';


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
        name: "",
        due_by: null,
    })

  function handleChange(e) {
    setFormData({
        ...formData,
        [e.target.name]: e.target.value
    })
  } 

  const handleClose = () => {
    setOpen(!open);
    setFormData({
        name: "",
        due_by: null,
    })
  };

  function handleDateChange(e){
        setFormData({
            ...formData,
            due_by: e
        })
  }

  function handleAdd(e){
    handleClose()
    e.preventDefault()
    if (formData.name != '' && formData.due_by != null){
        if (type == 'tasks'){
            const newObj = {
                name: formData.name,
                due_by: moment(formData.due_by).format('YYYY-MM-DD HH:mm')
            }
            fetch(`/api/tasks`, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(newObj)
            })
            .then((r) => {
                if (r.ok){
                    <Alert severity="success">Add task successful</Alert>
                    return r.json()
              }
              else{
                <Alert severity="error">Failed to add task.</Alert>
              }
            })
            .then(data => setTaskData([...taskData, data]))
        }else if(type == 'finances'){
            const newObj = {
                name: formData.name,
                due_by: moment(formData.due_by).format('YYYY-MM-DD HH:mm')
            }
            fetch(`/api/finances`, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(newObj)
            })
            .then((r) => {
              if (r.ok){
                <Alert severity="success">Add finance successful</Alert>
                return r.json()
              }
              else{
                <Alert severity="error">Failed to add finance.</Alert>
              }
            })
            .then(data => setFinanceData([...financeData, data]))

        }else if(type == 'appointments'){
            const newObj = {
                name: formData.name,
                due_by: moment(formData.due_by).format('YYYY-MM-DD HH:mm')
            }
            fetch(`/api/appointments`, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(newObj)
            })
            .then((r) => {
              if (r.ok){
                <Alert severity="success">Add appointment successful</Alert>
                return r.json()
              }
              else{
                <Alert severity="error">Failed to add appointment.</Alert>
              }
            })
            .then(data => setAppointmentData([...appointmentData, data]))
        }
    }else if(!formData.name){
        return <Alert severity="error">Please enter a name.</Alert>
    }else if(!formData.due_by){
        return <Alert severity="error">Enter a date in the format YYYY/MM/DD HH:MM AM/PM</Alert>
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
            required
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
           required 
           name='due_by'
           format='YYYY/MM/DD hh:mm a'
           value={formData.due_by}
           onChange={handleDateChange}
           />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleAdd}>Add</Button>
        </DialogActions>
      </Dialog>
  );
}