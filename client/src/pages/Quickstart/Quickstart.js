import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles'
import QuickstartContext from '../../utils/QuickstartContext'
import WorkoutAPI from '../../utils/WorkoutAPI'
import { Typography } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import UBModal from '../../components/UBModal'
import LBModal from '../../components/LBModal'



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
  typography: {
    "fontFamily": "\"Bangers\"",
    "fontSize": 36
  }
})

const Quickstart = () => {
  const classes = useStyles();
  const [quickState, setQuickState] = useState({
    area: '',
    workouts: []
  })

  const getRandomWorkouts = workouts => {
    let m = workouts.length, t, i

    // WHILE THERE REMAINS ELEMENTS TO SHUFFLE
    while (m) {

      // PICK A REMAINING ELEMENT
      i = Math.floor(Math.random() * m--)

      // AND SWAP IT WITH CURRENT ELEMENT
      t = workouts[m]
      workouts[m] = workouts[i]
      workouts[i] = t
    }

    return workouts[0, 1, 2]
  }

  quickState.getWorkouts = () => getRandomWorkouts(quickState.workouts.filter(workout => workout.area === quickState.area))


  useEffect(() => {
    WorkoutAPI.getAllWorkouts()
      .then(({ data: workouts }) => setQuickState({ ...quickState, workouts }))
      .catch(e => console.error(e))
  }, [])

  return (
    <QuickstartContext.Provider value={quickState}>
      <Grid container spacing={4} direction='row' justify="space-around" alignItems="center">
        <Grid item xs={12} sm={12} align="center">
          <Typography variant="h6">pick your poison:</Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={3}
          className={classes.buttonContainer}
          onClick={() => setQuickState({ ...quickState, area: 'upper' })}
        >
          <UBModal />
        </Grid>

        <Grid
          item
          xs={12}
          sm={3}
          className={classes.buttonContainer}
          onClick={() => setQuickState({ ...quickState, area: 'lower' })}
        >
          <LBModal />
        </Grid>

      </Grid>
    </QuickstartContext.Provider>
  );
}

export default Quickstart