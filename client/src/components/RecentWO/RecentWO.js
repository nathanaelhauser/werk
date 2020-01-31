import React from 'react'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
    card: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });

const RecentWO = () => {

    const classes = useStyles();
    
  
    return (
    <Container>
      <Card className={classes.card} variant="outlined">
        <CardContent>
          <Typography variant="h5" component="h2">
            Username{}
          </Typography>
          <Card className={classes.card} variant="outlined">
      <CardContent>
        <Typography variant="body2" component="p">
         
        </Typography>
      </CardContent>
    </Card>
        </CardContent>
      </Card>
      </Container>
    );

}
  export default RecentWO