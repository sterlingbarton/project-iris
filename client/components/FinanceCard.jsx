import * as React from 'react';
import {useRouter} from 'next/router';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Button, ButtonGroup } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import AddCardRoundedIcon from '@mui/icons-material/AddCardRounded';
import Add from './Add';
import Edit from './Edit'
import { GlobalState } from '../components/Layout';
import moment from 'moment';


export default function FinanceCard({financeData, setFinanceData, refetch}) {
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
    const finances = financeData.map((finance, index) => {
        if(today === moment(finance.due_by).format("MMM Do YYYY") && globalState.state.user.id === finance.user_id){
            return(
                <ListItem sx={{color:"text.secondary"}} key={index} button secondaryAction={
                    router.pathname === '/finances' && 
                    (<ButtonGroup edge='end'>
                        <Button variant="outlined" size="small" color="primary" onClick={() => handleOpenEdit(finance.id)}>Edit</Button>
                        <Button variant="outlined" size="small" color="primary" startIcon={<DeleteIcon />} onClick={() => handleDeleteFinance(finance.id)}>Delete</Button>
                    </ButtonGroup>)
                  }>
                <ListItemAvatar>
                    <AddCardRoundedIcon />
                </ListItemAvatar>
                <ListItemText primary={finance.name} secondary={moment(finance.due_by).format('LLL')} />
              </ListItem>
            )
        }
    })

    function handleDeleteFinance(id){
        fetch(`/api/finances/${id}` , {
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
                Finances
            </Typography>
            {router.pathname === '/finances' && 
                <IconButton variant="outlined" size="small" color="primary" onClick={handleClickOpen}>
                    <AddRoundedIcon />
                </IconButton>
            }
          </Box>
          <Add open={open} setOpen={setOpen} type={'finances'} financeData={financeData} setFinanceData={setFinanceData}/>
          <Edit openEdit={openEdit} setOpenEdit={setOpenEdit} type={'finances'} financeData={financeData} setFinanceData={setFinanceData} currentId={currentId} refetch={refetch}/>
          <List>
            {finances}
          </List>
        </CardContent>
    </Card>
  );
}
