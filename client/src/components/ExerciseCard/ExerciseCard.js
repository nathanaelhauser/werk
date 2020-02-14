import React, {useState, useContext, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper'
import ExerciseAPI from '../../utils/ExerciseAPI'
import ExerciseContext from '../../utils/ExerciseContext'
import ExerciseList from '../../components/ExerciseList'
 
const {getExercises} =ExerciseAPI


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
  const [exerciseState, setExerciseState] = useState({
    exerciseName: '', 
    mainMuscles: '', 
    secondaryMuscles: '', 
    exerciseDespcription: '', 
    exerciseEquipment:''
  })
 
  useEffect(() =>{
    getExercises(sessionStorage.getItem('werkToken'))
    .then(({ data: exercise}) =>{
      const {exerciseName, mainMuscles, secondaryMuscles, exerciseDespcription, exerciseEquipment} = exercise
      setExerciseState({exerciseName, mainMuscles, secondaryMuscles, exerciseDespcription, exerciseEquipment})
    })
    .catch(e=> console.error(e))
    })
    return (
      <Container>
        <Paper>
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <ExerciseList/>
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