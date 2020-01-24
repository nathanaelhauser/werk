import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import UBModal from '../../components/UBModal'


const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const Quickstart = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={4} direction='row' justify="space-around" alignItems="center">
     <Grid item xs={12}> <h1> What area do you want to werk on?</h1></Grid>
      <Grid item xs={12} sm={6} md={4} className={classes.buttonContainer}>
    {/* //Upper Body Card */}
    <Button onClick={}>
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          
          component="img"
          alt="upperbody"
          image={require('./qsPictures/upperbody.jpg')}
          height='200'
          title="Upper body"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Upper Body
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Don't tri and get bi
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Button>
    </Grid>

    {/* //Lower Body Card */}
    <Grid item xs={12} sm={6} md={4} className={classes.buttonContainer}>
    <Card className={classes.card}>
    <CardActionArea>
      <CardMedia
         component="img"
         alt="upperbody"
         image={require('./qsPictures/lowerBody.jpg')}
         height='230'
         title="Lower body"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          Lower Body
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Squat til you can't squat no more, then squat some more
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
  </Grid>
  </Grid>
  );
}

export default Quickstart