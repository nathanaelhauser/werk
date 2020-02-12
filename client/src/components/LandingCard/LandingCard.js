import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import CodeIcon from '@material-ui/icons/Code'
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter'

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    // background: "#86DEB7"
    background: "#f44336"
  },
  media: {
    height: 200,

  },
})

const LandingCard = props => {
  const classes = useStyles()
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.image}
          title="Explainer"
        />
        <CardContent>
          <Typography gutterBottom variant="h5">
            {props.benefit}
          </Typography>
          <Typography variant="subtitle2">
            {props.role}
          </Typography>
          <br />
          <Typography variant="subtitle2">
            {props.favorite}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default LandingCard