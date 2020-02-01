import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container'
import {getUser} from '../../utils/UserAPI'


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

const MyProfileCard = () => {

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
         <p>Name:{}</p> 
         <p>Age: {} </p>
         <p>Weight: {}</p>
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Edit Information</Button>
      </CardActions>
    </Card>
        </CardContent>
      </Card>
      </Container>
    );

}


export default MyProfileCard
