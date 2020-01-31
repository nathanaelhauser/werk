import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import LaxCard from '../LaxCard'
import Grid from '@material-ui/core/Grid';
import Jumbotron from '../Jumbotron'

const useStyles = makeStyles(theme => ({
    root: {
      '& > *': {
        margin: theme.spacing(1)
      }
    },
  }));

const LaxContainer = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      {/* for logo */}
      {/* <LaxCard /> */}
      <Jumbotron />
      <Container maxWidth="sm">
        {/* <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} /> */}
        <div className={classes.root}>
             {/* stuff */}
        </div>
      </Container>
    </React.Fragment>
  );
}

export default LaxContainer