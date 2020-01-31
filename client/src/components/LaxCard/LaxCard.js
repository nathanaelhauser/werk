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
import ReactAdvancedBanner from 'react-advanced-banner'

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
    // <Card className={classes.card}>
    //   <CardActionArea>
    //     <CardMedia
    //       className={classes.media}
    //       image={props.image}
    //       title="Welcome"
    //     />
    //     <CardContent>
    //       <Typography gutterBottom variant="h3">
    //         {props.name}
    //       </Typography>
    //       <Typography variant="h4" color="textSecondary">
    //         <FitnessCenterIcon fontSize="large"/> {props.role}
    //       </Typography>
    //       <br/>
    //       <Typography variant="subtitle1" color="textSecondary">
    //         TBD {props.favorite}
    //       </Typography>
    //     </CardContent>
    //   </CardActionArea>
    // </Card>
    <ReactAdvancedBanner 
            title="- W  E  R  K -"
            body="© the-group 2020"
            image="image_url"
            parallax="true"
            shadow="0px 0px 44px 0px rgba(0, 0, 0, 0.11)"
            color="black"
            button="continue w/o account"
            buttonColor="#fff"
            buttonBackground="#444"
            link="/readmore"
/>
  )
}

export default LaxCard