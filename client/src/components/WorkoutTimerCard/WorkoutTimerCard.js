import React, { useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import WorkoutContext from '../../utils/WorkoutContext'

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
  const { timeLeft } = useContext(WorkoutContext)

  return (
    <Container>
      <Grid container direction="row" alignItems="center" justify="center">
        <Grid item sm={12} md={6} className={classes.grid}>
          <Paper className={classes.paper} style={{ backgroundColor: '#000000' }}>

          </Paper>
        </Grid>
      </Grid>
    </Container>
  )
}

export default WorkoutTimerCard