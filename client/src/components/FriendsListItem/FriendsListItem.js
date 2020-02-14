import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'
import PersonIcon from '@material-ui/icons/Person'
import DeleteIcon from '@material-ui/icons/Delete'

const useStyles = makeStyles(theme => ({
  inline: {
    display: 'inline'
  },
  icon: {
    marginRight: '20px'
  }
}))

const FriendsListItem = props => {
  const classes = useStyles()

  return (
    <ListItem alignItems="flex-start" divider={true} >
        <ListItemIcon className={classes.icon}>
          <PersonIcon fontSize="small" style={{ color: props.iconColor }} />
        </ListItemIcon>
        <Grid container direction="row" justify="space-between">
          <Grid item>
            <Typography
              component="span"
              variant="body1"
              className={classes.inline}
            >
              {props.username}
            </Typography>
          </Grid>
          <Grid item>
            <IconButton size="small" aria-label="delete" onClick={props.handleDelete}>
              <DeleteIcon fontSize="small" />
            </IconButton>
          </Grid>
        </Grid>
      </ListItem>
  )
}

export default FriendsListItem