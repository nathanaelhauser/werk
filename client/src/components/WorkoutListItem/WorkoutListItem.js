import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import IconButton from '@material-ui/core/IconButton'
import LibraryAddIcon from '@material-ui/icons/LibraryAdd'

const WorkoutListItem = props => {
  return (
    <ListItem>
      <ListItemText
        primary={props.workout.name}
      />
      <ListItemSecondaryAction>
        <IconButton edge="end" aria-label="delete">
          <LibraryAddIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  )
}

export default WorkoutListItem