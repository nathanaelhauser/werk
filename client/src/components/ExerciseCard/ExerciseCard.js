import React, {useState, useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper'
import ExerciseAPI from '../../utils/ExerciseAPI'
import ExerciseContext from '../../utils/ExerciseContext'
import WorkoutAPI from '../../utils/WorkoutAPI'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

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


const ExerciseCard = props => {
  const classes = useStyles();
  const {} = useContext(ExerciseContext)
  const [exercises, setExercise] = useState([])
 
    return (
      <Container>
        <Paper>
      <Card className={classes.root} variant="outlined">
        <CardContent>
         <ListItem>
           <ListItemText primary = {props.exercise}>

           </ListItemText>
         </ListItem>
        </CardContent>
        <CardActions>
          {/* <Button size="small" onClick= {handleAddFav}>Add to Custom Workouts</Button> */}
        </CardActions>
      </Card>
      </Paper>
      </Container>
    );
  }

  export default ExerciseCard