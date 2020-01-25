import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import lightGreen from '@material-ui/core/colors/lightGreen'

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    background: lightGreen['A400']
  },
});

const Home = () => {
  const classes = useStyles();
  const redirect = page => event => window.location.href = `http://${window.location.host}${page}`
 

  return (
    <div className="container">
  
    <Card className={classes.card} onClick={redirect('/quickstart')}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Quick Start
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Choose what area you want to werk on and get get started
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

    <Card className={classes.card} onClick={redirect('/custom')}>
    <CardActionArea>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          Create a workout
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Create the workout that is best for you
        </Typography>
      </CardContent>
    </CardActionArea>
    </Card>
    </div>
  );
}
export default Home