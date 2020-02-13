import React, { useState, useEffect, useContext } from 'react'
import { Redirect } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import FriendsContext from '../../utils/FriendsContext'
import FriendAPI from '../../utils/FriendAPI'
import UserAuthAPI from '../../utils/UserAuthAPI'
import UnauthorizedRedirect from '../../components/UnauthorizedRedirect'

const { getFriends } = FriendAPI

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    // background: "#86DEB7",
    background: "#f44336",
    text: '#eceff1'
  }
});

const useGridStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginTop: 30,
    justify: "center"  
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }
}))

const Home = () => {
  const classes = useStyles()
  const gridClasses = useGridStyles()
  const [goCustom, setGoCustom] = useState(false)
  const [goQuickstart, setGoQuickstart] = useState(false)
  const [authorizedState, setAuthorizedState] = useState(true)
  const { setFriends } = useContext(FriendsContext)
 
  const renderRedirectCustom = () => {
    if (goCustom) {
      return <Redirect to="/custom" />
    }
  }

  const renderRedirectQuickstart = () => {
    if (goQuickstart) {
      return <Redirect to="/quickstart" />
    }
  }

  useEffect(() => {
    UserAuthAPI.authorizeUser()
      .then(({ data: { isAuthorized } }) => {
        setAuthorizedState(isAuthorized)
      })
      .catch(e => console.error(e))

    // const socket = io('http://localhost:80')
    // socket.emit('user', { token: sessionStorage.getItem('werkToken') })
  }, [])

  useEffect(() => {
    getFriends()
      .then(({ data: friends }) => setFriends(friends))
      .catch(e => console.error(e))
  }, [])

  return (
    <div className = {gridClasses.root} >
      <UnauthorizedRedirect authorized={authorizedState} />
      {renderRedirectCustom()}
      {renderRedirectQuickstart()}
      <Grid container direction="row" >
      <Grid item xs={12} sm={6} align="center">
      <Card className={classes.card} onClick={() => setGoQuickstart(true)} >
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Quick Start
          </Typography>
          <Typography variant="body2" color={classes.text} component="p">
            Just choose what area you want to focus and get to work
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <br/>
    </Grid>
    <Grid item xs={12} sm={6} align="center">
    <Card className={classes.card} onClick={() => setGoCustom(true)}>
    <CardActionArea>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          Create a workout
        </Typography>
        <Typography variant="body2" color={classes.text} component="p">
          Create the workout that is best for you
        </Typography>
      </CardContent>
    </CardActionArea>
    </Card>
    </Grid>
    </Grid>
    </div>
  )
}

export default Home