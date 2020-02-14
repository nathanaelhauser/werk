import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Card,
         CardContent,
         Grid,
         Paper } from '@material-ui/core'
import ExerciseList from '../../components/ExerciseList'

const useStyles = makeStyles({
  root: {
    minWidth: 250,
  },
  typography: {"fontFamily": "\"Bangers\"",
    "fontSize": 20},
titleTypography: {"fontFamily": "\"Bangers\"",
    "fontSize": 20},
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