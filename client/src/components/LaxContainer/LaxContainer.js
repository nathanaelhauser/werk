import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { CssBaseline,
         Container } from '@material-ui/core'
import Jumbotron from '../Jumbotron'

const useStyles = makeStyles(theme => ({
    root: {
      '& > *': {
        margin: theme.spacing(1)
      }
    },
  }))

const LaxContainer = () => {
  const classes = useStyles()
  return (
    <React.Fragment>
      <CssBaseline />
      {/* for logo */}
      <Jumbotron />
      <Container maxWidth="sm">
        {/* <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} /> */}
        <div className={classes.root}>
             {/* stuff */}
        </div>
      </Container>
    </React.Fragment>
  )
}

export default LaxContainer