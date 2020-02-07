import React, { useState, useEffect } from 'react'
import UserAPI from '../../utils/UserAPI'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'

const useStyles = makeStyles({
    card: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  })

const MyProfileCard = () => {

    const classes = useStyles()

    const [userState, setUserState] = useState({
      username: '',
      name: '',
      age: '',
      weight: ''
    })

    useEffect(() => {
      UserAPI.getMyUser(sessionStorage.getItem('werkToken'))
        .then(({ data: user }) => setUserState({ ...user }))
        .catch(e => console.error(e))
    }, [])
  
    return (

    <Container>
      <Card className={classes.card} variant="outlined">
        <CardContent>
          {/* user's username will populate */}
          <Typography variant="h5" component="h2">
            {userState.username}
          </Typography>
          <Card className={classes.card} variant="outlined">
      <CardContent>
        <Typography variant="body2" component="p">
          {/* user's name will populate */}
         <p>Name: {userState.name}</p> 
         {/* age will populate as N/A */}
         <p>Age: {userState.age} </p>
         {/* weight will populate as N/A */}
         <p>Weight: {userState.weight}</p>
        </Typography>
      </CardContent>
      <CardActions>
        {/* user can add age and weight here */}
        <Button size="small">Edit Information</Button>
      </CardActions>
    </Card>
        </CardContent>
      </Card>
      </Container>
    )

}


export default MyProfileCard
