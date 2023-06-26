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

export default function Add({open, setOpen}) {

  const today = new Date();
  const formattedDate = format(today, 'yyyy/MM/dd')

  const handleClose = () => {
    setOpen(false);
  };

  function handleAddTask(){
    console.log('hello')
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
            type="Name"
            fullWidth
            variant="standard"
          />
          <DateTimeField defaultValue={formattedDate}
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="Name"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleAddTask}>Add</Button>
        </DialogActions>
      </Dialog>
  );
}