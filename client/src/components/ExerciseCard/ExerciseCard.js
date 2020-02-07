import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 10,
    },
    pos: {
      marginBottom: 10,
    },
  });
const ExerciseCard = () => {
const classes = useStyles();
    return (
      <Container>
        <Paper>
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography className={classes.pos} color="textSecondary">
            Name of Exercise
          </Typography>
          <Typography variant="body2" component="h2">
            well meaning and kindly.
      
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Add to Custom Workouts</Button>
        </CardActions>
      </Card>
      </Paper>
      </Container>
    );
  }

  export default ExerciseCard