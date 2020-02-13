import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import IconButton from '@material-ui/core/IconButton'
import Fab from '@material-ui/core/Fab'
import Grid from '@material-ui/core/Grid'
import RemoveIcon from '@material-ui/icons/Delete'
import Button from '@material-ui/core/Button'
import PersonIcon from '@material-ui/icons/Person'
import AddIcon from '@material-ui/icons/Add'
import { Typography } from '@material-ui/core'

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
    friends: []
  })

  const handleOpenFriendForm = () => {

  }

  useEffect(() => {

  })

  return (
    <Container>
      <Card className={classes.card} variant="outlined">
        <CardContent>
          <Grid container spacing={3} direction="column">
            <Grid item container direction="row" justify="space-between" alignItems="center">
              <Typography variant="h6">Friends</Typography>
              <Fab className={classes.fab} aria-label="Add a friend">
                <AddIcon />
              </Fab>
            </Grid>
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
  )
}

export default FriendsCard