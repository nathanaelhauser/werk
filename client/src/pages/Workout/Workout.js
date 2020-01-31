import React, { useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles({
  root: {
    position: 'relative',
    top: '0',
    bottom: '0',
    left: '0',
    right: '0'
  }
})

const Workout = () => {
  const classes = useStyles()
  const { exercises, workout, id } = { exercises: [], workout: 'Awesome Workout', id: 10 }

  return (
    <Container>
      <div className={classes.root}>
        <Grid 
          container 
          spacing={3}
          direction="column"
          justify="center"
          alignItems="center"
        >
          <Grid item>
            <h1>{workout}</h1>
          </Grid>
          <Grid item>
            <Button variant="contained" color="primary">START!</Button>
          </Grid>
        </Grid>
      </div>
    </Container>
  )
}

export default Workout