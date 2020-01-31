import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));

const LaxContainer = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        {/* <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} /> */}
        <h1>WERLCOME TO WERK !</h1>
        <br/><br/><br/>
        <div className={classes.root}>
        <Button variant="contained" color="secondary">
        Log In / Sign Up
      </Button>
      <Button variant="contained" color="secondary">
        CONTINUE WITHOUT ACCOUNT
      </Button>            
        </div>
      </Container>
    </React.Fragment>
  );
}

export default LaxContainer