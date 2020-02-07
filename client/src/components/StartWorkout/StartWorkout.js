import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles({
  grid: {
    height: 150,
    width: '50%'
  }
})

const StartWorkout = () => {
  const classes = useStyles()
  return (
    <Container>
      <Grid container direction="row" alignItems="center" justify="center" className={classes.grid}>
        <Button variant="contained" color="primary" onClick={() => console.log('do nothing')}>Start</Button>
      </Grid>
    </Container>
  )
}

export default StartWorkout