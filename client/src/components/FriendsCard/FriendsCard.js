import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import FriendsForm from '../FriendsForm'
import FriendsList from '../FriendsList'
import FriendsContext from '../../utils/FriendsContext'
import FriendAPI from '../../utils/FriendAPI'

const { getFriends, addFriend, deleteFriend } = FriendAPI

const useStyles = makeStyles(theme => ({
  card: {
    minWidth: 275,
  },
  title: {
    fontSize: 10,
    margin: theme.spacing(4, 0, 2),
  },
  fab: {
    backgroundColor: "#f44336",
    color: "#FFFFFF"
  }
}))

const FriendsCard = () => {
  const classes = useStyles()
  // const [friendsState, setFriendsState] = useState({
  //   friends: [],
  //   friend: ''
  // })

  // friendsState.handleInputChange = event =>
  //   setFriendsState({ ...friendsState, [event.target.name]: event.target.value })

  // friendsState.handleSubmit = event => {
  //   event.preventDefault()
  //   addFriend(friendsState.friend)
  //     .then(({ data: friend }) => {
  //       let friends = [ ...friendsState.friends ]
  //       friends.push(friend)
  //       setFriendsState({ ...friendsState, friends, friend: '' })
  //     })
  //     .catch(e => console.error(e))
  // }

  // friendsState.handleDelete = friendID => event => {
  //   deleteFriend(friendID)
  //     .then(() => {
  //       let friends = [ ...friendsState.friends ]
  //       friends = friends.filter(friend => friend._id !== friendID )
  //       setFriendsState({ ...friendsState, friends })
  //     })
  //     .catch(e => console.error(e))
  // }

  // useEffect(() => {
  //   getFriends()
  //     .then(({ data: friends }) => setFriendsState({ ...friendsState, friends }))
  //     .catch(e => console.error(e))
  // }, [])

  useEffect(() => {

  })

  return (
      <Container>
        <Card className={classes.card} variant="outlined">
          <CardContent>
            <Grid container spacing={3} direction="column">
              <Grid item container direction="row" justify="space-between" alignItems="center">
                <Typography variant="h6">Friends</Typography>
                <FriendsForm />
              </Grid>
              <Divider orientation='horizontal' variant="middle" />
              <Grid item>
                <FriendsList />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Container>
  )
}

export default FriendsCard