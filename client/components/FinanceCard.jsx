import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Button, ButtonGroup } from '@mui/material';


export default function FinanceCard({financeData, setFinanceData}) {
    console.log(financeData)

    const finances = financeData.map(finance => {
        return <Box variant='li' key={finance.id}>
            <Typography variant='h4'>{finance.due_by}</Typography>
            <Typography variant='p'>{finance.name}</Typography>
            <ButtonGroup>
                <Button variant="outlined" size="small" color="primary" onClick={handleEditFinance}>Edit</Button>
                <Button variant="outlined" size="small" color="primary" onClick={handleDeleteFinance}>Delete</Button>
            </ButtonGroup>
            </Box>
    })

    function handleEditFinance(){
        console.log('need to add edit finance functionality')
    }

    function handleDeleteFinance(){
    //     fetch(`/api/finances/${finance.id}` , {
    //         method: 'DELETE',
    //     })
    //     .then((r) => r.json())
    //     .then(data => setFinanceData(...financeData, data))
    }

    function handleAddFinance(){
        console.log('need new dialog for this')
    }

  return (
    <Card sx={{ maxWidth: 345 }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Finances
          </Typography>
          <Button variant="outlined" size="small" color="primary" onClick={handleAddFinance}>
          +
          </Button>
          <Typography variant="ul" color="text.secondary">
            {finances}
          </Typography>
        </CardContent>
    </Card>
  );
}
