import React, { useContext, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import WorkoutContext from '../../utils/WorkoutContext'
import { useEffect } from 'react'

const white = '#FFFFFF'
const green = '#2DC937'
const yellow = '#E7B416'
const azure = '#0080FF'

const useStyles = makeStyles({
  grid: {
    height: '50vh',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  paper: {
    height: '100%',
    width: '100%'
  }
})

const WorkoutTimerCard = () => {
  const classes = useStyles()
  const [ colorState, setColorState ] = useState('')
  const { timeLeft, onExercise } = useContext(WorkoutContext)

  useEffect(() => {
    if (onExercise) {
      if (timeLeft > 10) {
        setColorState(green)
      } else {
        setColorState(yellow)
      }
    } else {
      setColorState(azure)
    }
  }, [timeLeft, currentStage])

  return (
    <Container>
      <Grid container direction="row" alignItems="center" justify="center">
        <Grid item sm={12} md={6} className={classes.grid}>
          <Paper 
            className={classes.paper} 
            style={{ backgroundColor: colorState }}
          >
            <h1 color={white}>Hello</h1>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  )
}

export default WorkoutTimerCard