import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
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

  return (
    <Grid container spacing={4} direction='row' justify="space-around" alignItems="center">
     <Grid item > <h1> What area do you want to werk on?</h1></Grid>
      <Grid item xs={12} sm={6} md={6} className={classes.buttonContainer}>
        <UBModal/>
      </Grid>
   =
      <Grid item xs={12} sm={6} md={6} className={classes.buttonContainer}>
        <LBModal/>
      </Grid>
  
    </Grid>
  );
}

export default Quickstart