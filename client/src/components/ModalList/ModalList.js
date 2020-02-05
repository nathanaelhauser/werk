import React, { useContext, useState, useEffect } from 'react'
import QuickstartContext from '../../utils/QuickstartContext'
import WorkoutListItem from '../../components/WorkoutListItem'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import ListItemText from '@material-ui/core/ListItemText'
import IconButton from '@material-ui/core/IconButton'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Grid from '@material-ui/core/Grid'
import LibraryAddIcon from '@material-ui/icons/LibraryAdd'
import { PromiseProvider } from 'mongoose'

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
  const [ randomWorkouts, setRandomWorkouts ] = useState({
    workouts: []
  })
  const { getWorkouts, workouts } = useContext(QuickstartContext)

  useEffect(() => {
    setRandomWorkouts({ ...randomWorkouts, workouts: getWorkouts() })
  }, [])


  console.log(workouts)
  return(
    <List>
      {randomWorkouts.workouts
        ? randomWorkouts.workouts.map(workout => <WorkoutListItem workout={workout} />)
        : ''
      }
    </List>
  )
}

export default ModalList