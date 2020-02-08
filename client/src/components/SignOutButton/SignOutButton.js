import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import UnauthorizedRedirect from '../../components/UnauthorizedRedirect'

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(10),
      backgroundColor: 'red',
      color: 'white'
    },
  },
}))

const SignOutButton = () => {
    const classes = useStyles()
    const [goLanding, setGoLanding] = useState(false)
    const [authorizedState, setAuthorizedState] = useState(true)

    const renderRedirectLanding = () => {
      if (goLanding) {
        return <Redirect to="/" />
      }
    }

    return (
        <div className={classes.root}>
        <UnauthorizedRedirect authorized={authorizedState} />
        {renderRedirectLanding()}
        <Button variant="contained" color='red' onClick={() => setGoLanding(true)} >
          SIGN OUT
        </Button>
        </div>            

    )
}

export default SignOutButton