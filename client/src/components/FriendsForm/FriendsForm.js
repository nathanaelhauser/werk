import React, { useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import InputBase from '@material-ui/core/InputBase'
import IconButton from '@material-ui/core/IconButton'
import AddIcon from '@material-ui/icons/Add'
import FriendsContext from '../../utils/FriendsContext'

const useStyles = makeStyles(theme => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}))

const FriendsForm = () => {
  const classes = useStyles()
  const { friend, handleInputChange, handleSubmit } = useContext(FriendsContext)

  return (
    <Paper component="form" className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder="Username"
        inputProps={{ 'aria-label': 'add friend' }}
        name="friend"
        value={friend}
        onChange={handleInputChange}
      />
      <IconButton type="submit" className={classes.iconButton} aria-label="add" onClick={handleSubmit}>
        <AddIcon />
      </IconButton>
    </Paper>
  )
}

export default FriendsForm