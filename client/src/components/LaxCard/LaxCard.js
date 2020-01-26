import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter'

const useStyles = makeStyles({
  card: {
    maxWidth: 1000,
  },
  media: {
    height: 345,

  },
})

const LaxCard = props => {
  const classes = useStyles()
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.image}
          title="Welcome"
        />
        <CardContent>
          <Typography gutterBottom variant="h3">
            {props.name}
          </Typography>
          <Typography variant="h4" color="textSecondary">
            <FitnessCenterIcon fontSize="large"/> {props.role}
          </Typography>
          <br/>
          <Typography variant="subtitle1" color="textSecondary">
            TBD {props.favorite}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default LaxCard