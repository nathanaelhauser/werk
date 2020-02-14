import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import ExerciseList from '../../components/ExerciseList'

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
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
    <Container>
      <Paper>
        <Card className={classes.root} variant="outlined">
          <CardContent>
            <ExerciseList />
          </CardContent>
        </Card>
      </Paper>
    </Container>
  )
}

export default ExerciseCard