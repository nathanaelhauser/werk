import React,
       { useContext,
         useState,
         useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { List } from '@material-ui/core'
import WorkoutListItem from '../../components/WorkoutListItem'
import QuickstartContext from '../../utils/QuickstartContext'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
}))

const ModalList = () => {
  const classes = useStyles()
  const [randomWorkouts, setRandomWorkouts] = useState({
    workouts: []
  })
  const { getWorkouts, workouts } = useContext(QuickstartContext)

  useEffect(() => {
    setRandomWorkouts({ ...randomWorkouts, workouts: getWorkouts()})
  }, [])

  return (
    <List>
      {randomWorkouts.workouts
        ? randomWorkouts.workouts.map(workout => <WorkoutListItem key={workout._id} workout={workout} />)
        : ''
      }
    </List>
  )
}

export default ModalList
