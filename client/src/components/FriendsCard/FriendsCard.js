import React, { useContext, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import FriendsForm from '../FriendsForm'
import FriendsList from '../FriendsList'
import FriendAPI from '../../utils/FriendAPI'
import FriendsContext from '../../utils/FriendsContext'

const { getFriends } = FriendAPI

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
  const { setFriends } = useContext(FriendsContext)

  useEffect(() => {
    getFriends()
      .then(({ data: friends }) => setFriends(friends))
      .catch(e => console.error(e))
  }, [])

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