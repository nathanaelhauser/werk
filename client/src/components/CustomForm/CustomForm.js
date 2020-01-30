import React from 'react'
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'

const CustomForm = () => {
  return (
    <Container>
      <Paper>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={3}
        >
          <Grid item xs={12} md={6}>
            
          </Grid>
        </Grid>
      </Paper>
    </Container>
  )
}