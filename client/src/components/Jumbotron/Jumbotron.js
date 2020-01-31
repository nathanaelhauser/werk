import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles({
  root: {
    height: 100
  }
})

const Jumbotron = () => {
  const classes = useStyles()

  return (
    <Container className={classes.root}>
      <Grid 
        container 
        spacing={3}
        direction='column'
        justify='center'
        alignItems='center'
      >
        <Grid item>
        <Typography variant="h3">WERK</Typography>
        </Grid>
        <Grid item>
        <Typography variant="h7">© the-group 2020</Typography>
        </Grid>
        <br/><br/><br/>
        <Grid item>
          <Button>Sign In</Button>
        </Grid>
        <Grid item>
          <Button>Register</Button>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Jumbotron