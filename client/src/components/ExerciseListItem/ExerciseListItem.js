import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import Grid from '@material-ui/core/Grid'

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
    "fontSize": 30
  },
  titleTypography: {
    "fontFamily": "\"Bangers\"",
    "fontSize": 36
  },

  inline: {
    display: 'inline'
  },
  icon: {
    marginRight: '20px'
  }
}))

const ExerciseListItem = props => {
  return (
    <Grid>
    <Card>
      <CardContent>
      
        <p>{props.name}</p>
        <p>{props.description}</p>
        <p>{props.equipment}</p>
        <p>{props.mainMuscles}</p>
        <p>{props.secondaryMuscles}</p>
     
      </CardContent>
    </Card>
     </Grid>
  )
}

export default ExerciseListItem