import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'

const ExerciseListItem = props => {
  return (
    <Card>
      <CardHeader>
        {props.name}
      </CardHeader>
      <CardContent>
        {props.description}
        {props.equipment}
        {props.mainMuscles}
        {props.secondaryMuscles}
      </CardContent>
    </Card>
  )
}

export default ExerciseListItem