import React, {useEffect,useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper'
import ExerciseAPI from '../../utils/ExerciseAPI'
import ExerciseContext from '../../utils/ExerciseContext'
import WorkoutAPI from '../../utils/WorkoutAPI'

const {getExercises} = ExerciseAPI
const {createWorkout} = WorkoutAPI

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
  
    const [exerciseState, setExerciseState] = useState({
        exerciseName: '',
        mainMuscles: '',
        secondaryMuscles: '',
        exerciseDespcription: '',
        exerciseEquipment: '',
        addFav: [],
    })
    
exerciseState.handleAddFav= event =>{
    event.preventDefault()
    createWorkout({})
}

useEffect(() => {
  ExerciseAPI.getExercises('exercise')
  .then(({data: exercise}) => setExerciseState({...exercise}))
  .catch(e => console.error(e))
})

    return (
      <Container>
        <Paper>
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography className={classes.pos} color="textSecondary">
           <p> Name of Exercise: {exerciseState.exerciseName}</p>
          </Typography>
          <Typography variant="body2" component="h2">
           <p>Equipment: {exerciseState.exerciseEquipment}</p>
           <p>Main Muscles: {exerciseState.mainMuscles}</p>
           <p>Secondary Muscles: {exerciseState.secondaryMuscles}</p>
           <p>Description: {exerciseState.exerciseDespcription}</p>
      
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