import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Button, ButtonGroup } from '@mui/material';
import Add from './Add';
import Edit from './Edit'


export default function FinanceCard({financeData, setFinanceData}) {
    const [open, setOpen] = React.useState(false);
    const [openEdit, setOpenEdit] = React.useState(false);

    const handleOpenEdit = () => {
        setOpenEdit(!openEdit);
    };

    const finances = financeData.map(finance => {
        return <Box variant='li' key={finance.id}>
            <Typography variant='h4'>{finance.due_by}</Typography>
            <Typography variant='p'>{finance.name}</Typography>
            <ButtonGroup>
                <Button variant="outlined" size="small" color="primary" onClick={handleOpenEdit}>Edit</Button>
                <Button variant="outlined" size="small" color="primary" onClick={handleDeleteFinance}>Delete</Button>
            </ButtonGroup>
            </Box>
    })

    function handleDeleteFinance(){
    //     fetch(`/api/finances/${finance.id}` , {
    //         method: 'DELETE',
    //     })
    //     .then((r) => r.json())
    //     .then(data => setFinanceData(...financeData, data))
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
          <Add open={open} setOpen={setOpen} type={'finances'}/>
          <Edit openEdit={openEdit} setOpenEdit={setOpenEdit} type={'finances'} financeData={financeData} setFinanceData={setFinanceData}/>
          <Typography variant="ul" color="text.secondary">
            {finances}
          </Typography>
        </CardContent>
    </Card>
  );
}
