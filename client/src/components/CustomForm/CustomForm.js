import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'

const CustomForm = () => {

  useEffect(() => {
  }, [])

  return (
    <Container>
      <Paper>
        <form noValidate>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={3}
          >
            <Grid item xs={12} md={6}>
              <TextField id="workout-input" label="Your Workout" variant="outlined" />
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  )
}

export default CustomForm