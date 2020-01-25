import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import UBModal from '../../components/UBModal'
import LBModal from '../../components/LBModal';


const useStyles = makeStyles({
  button: {
    marginTop: 70,
    marginBottom: 70
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
})

const Quickstart = () => {
  const classes = useStyles();
  const UBClick = () => {
    return(<div>

    </div>)
  }

  return (
    <Grid container spacing={4} direction='row' justify="space-around" alignItems="center">
     <Grid item xs={12}> <h1> What area do you want to werk on?</h1></Grid>
      <Grid item xs={12} sm={6} md={4} className={classes.buttonContainer}>
        <UBModal/>
      </Grid>
   =
      <Grid item xs={12} sm={6} md={4} className={classes.buttonContainer}>
        <LBModal/>
      </Grid>
  
    </Grid>
  );
}

export default Quickstart