import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

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

    return (
        <div className={classes.root}>
        <Button variant="contained" color='red'>
          SIGN OUT
        </Button>
        </div>            

    )
}

export default SignOutButton