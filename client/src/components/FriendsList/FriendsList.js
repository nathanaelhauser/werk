import React, { useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import FriendsListItem from '../FriendsListItem'
import FriendsContext from '../../utils/FriendsContext'
import FriendsAPI from '../../utils/FriendAPI'

const inactive = "#757575"
const active = "#94E864"

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  }
}))

const FriendsList = () => {
  const classes = useStyles()
  const { friends, handleDelete } = useContext(FriendsContext)

  return (
    <List className={classes.root}>
      {
        friends
        ? friends.map(friend => 
          {{console.log(friend._id)}
          return <FriendsListItem 
            key={friend._id}
            iconColor={friend.isLoggedIn ? active : inactive}
            username={friend.username}
            handleDelete={handleDelete(friend._id)}
          />
          })
        : null
      }
    </List>
  )
}

export default FriendsList