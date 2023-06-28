import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Button, ButtonGroup } from '@mui/material';
import Add from './Add';
import Edit from './Edit'
import moment from 'moment';


export default function FinanceCard({financeData, setFinanceData, refetch}) {
    const [open, setOpen] = React.useState(false);
    const [openEdit, setOpenEdit] = React.useState(false);
    const [currentId, setCurrentId] = React.useState(null)

    const handleOpenEdit = (id) => {
        setOpenEdit(!openEdit);
        setCurrentId(id)
    };
    console.log(financeData)
    const finances = financeData.map(finance => {
        return <Box variant='li' key={finance.name}>
            <Typography variant='h4'>{moment(finance.due_by).format('LLL')}</Typography>
            <Typography variant='p'>{finance.name}</Typography>
            <ButtonGroup>
                <Button variant="outlined" size="small" color="primary" onClick={() => handleOpenEdit(finance.id)}>Edit</Button>
                <Button variant="outlined" size="small" color="primary" onClick={() => handleDeleteFinance(finance.id)}>Delete</Button>
            </ButtonGroup>
            </Box>
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
    <Card sx={{ maxWidth: 345 }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Finances
          </Typography>
          <Button variant="outlined" size="small" color="primary" onClick={handleClickOpen}>
          +
          </Button>
          <Add open={open} setOpen={setOpen} type={'finances'} financeData={financeData} setFinanceData={setFinanceData}/>
          <Edit openEdit={openEdit} setOpenEdit={setOpenEdit} type={'finances'} financeData={financeData} setFinanceData={setFinanceData} currentId={currentId}/>
          <Typography variant="ul" color="text.secondary">
            {finances}
          </Typography>
        </CardContent>
    </Card>
  );
}
