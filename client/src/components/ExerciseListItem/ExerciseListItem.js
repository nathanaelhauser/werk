import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

const useGridStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  
}));

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1)

    },
  },
  typography: {
    "fontFamily": "\"Bangers\"",
    "fontSize": 20
  },
  titleTypography: {
    "fontFamily": "\"Bangers\"",
    "fontSize": 20
  },

}))

const ExerciseListItem = props => {
  const classes = useStyles()
  return (
    <Grid>
    <Card>
      <CardContent>
      <Typography variant="body2" >
      <p>  {props.name}</p>
      <p> {props.description}</p>
      <p> {props.equipment}</p> 
      <p> {props.mainMuscles}</p> 
      <p>  {props.secondaryMuscles}</p>
     </Typography>
      </CardContent>
    </Card>
     </Grid>
  )
}

export default ExerciseListItem