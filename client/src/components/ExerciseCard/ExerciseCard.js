import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Paper from '@material-ui/core/Paper'
import ExerciseList from '../../components/ExerciseList'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles({
  root: {
    minWidth: 250,
  },

  title: {
    fontSize: 10,
  },
  pos: {
    marginBottom: 10,
  },
})

const ExerciseCard = props => {
  const classes = useStyles()

  return (
    <Grid container spacing={3} direction="column">
      <Paper>
        <Card className={classes.root} variant="outlined">
          <CardContent>
            <ExerciseList />
          </CardContent>
        </Card>
      </Paper>
      </Grid> 
  )
}

export default ExerciseCard