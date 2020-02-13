import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import IconButton from '@material-ui/core/IconButton'
import Grid from '@material-ui/core/Grid'
import RemoveIcon from '@material-ui/icons/Delete'
import Button from '@material-ui/core/Button'
import PersonIcon from '@material-ui/icons/Person'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import FriendsForm from '../FriendsForm'
import FriendsContext from '../../utils/FriendsContext'
import UserAPI from '../../utils/UserAPI'

const { getFriends, addFriend } = UserAPI

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
  const [friendsState, setFriendsState] = useState({
    friends: [],
    friend: ''
  })

  friendsState.handleInputChange = event =>
    setFriendsState({ ...friendsState, [event.target.name]: event.target.value })

  friendsState.handleSubmit = event => {
    event.preventDefault()
    addFriend(friendsState.friend)
      .then(({ data: friend }) => {
        console.log(friend)
        setFriendsState({ ...friendsState, friend: '' })
      })
      .catch(e => console.error(e))
  }

  useEffect(() => {

  })

  return (
    <FriendsContext.Provider value={friendsState}>
      <Container>
        <Card className={classes.card} variant="outlined">
          <CardContent>
            <Grid container spacing={3} direction="column">
              <Grid item container direction="row" justify="space-between" alignItems="center">
                <Typography variant="h6">Friends</Typography>
                <FriendsForm />
              </Grid>
              <Divider orientation='horizontal' variant="middle" flexItem />
              <Grid item>

              </Grid>
              {/* <Typography variant="h6" className={classes.title}>
            FRIENDS
          </Typography> */}
              {
                // workouts.length ? workouts.map(workout => (
                //   <p>
                //     {console.log(workout)}
                //   <Grid container>
                //   <Grid item xs={6}>
                //  {workout.name}
                //  </Grid>
                //  <Grid item xs={3}>
                //  <Button variant="contained" color="primary" onClick={handleStartWorkout}>
                //     Start
                // </Button>
                // </Grid>
                // <Grid item xs={3}>
                //  <IconButton size="small" aria-label="delete" onClick={() => handleDeleteWorkout(workout._id)}><RemoveIcon fontSize="medium"/></IconButton>
                //  </Grid>
                //  </Grid>
                //  </p>
                // )) : null
              }
            </Grid>
          </CardContent>
        </Card>
      </Container>
    </FriendsContext.Provider>
  )
}

export default FriendsCard