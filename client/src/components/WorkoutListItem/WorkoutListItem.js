import React, { useState, useContext } from 'react'
import { Redirect } from 'react-router-dom'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import IconButton from '@material-ui/core/IconButton'
import LibraryAddIcon from '@material-ui/icons/LibraryAdd'
import QuickStartContext from '../../utils/QuickstartContext'
import WorkoutContext from '../../utils/WorkoutContext'

const WorkoutListItem = props => {
  const { setWorkout } = useContext(WorkoutContext)
  const [goWorkout, setGoWorkout] = useState(false)

  const choseWorkout = event => {
    setWorkout(props.workout)
    setGoWorkout(true)
  }

  const renderRedirectWorkout = () => {
    if (goWorkout) {
      return <Redirect to="/workout" />
    }
  }

  return (
    <ListItem>
      {renderRedirectWorkout()}
      <ListItemText
        primary={props.workout.name}
      />
      <ListItemSecondaryAction>
        <IconButton edge="end" aria-label="delete" onClick={choseWorkout}>
          <LibraryAddIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  )
}

export default WorkoutListItem