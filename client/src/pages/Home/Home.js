import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    background: "#86DEB7",
    
  },
});

const useGridStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginTop: 30,
    justify: "center"  
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }
}));

const Home = () => {
  const classes = useStyles();
  const gridClasses = useGridStyles()
  const redirect = page => event => window.location.href = `http://${window.location.host}${page}`
 

  return (
    <div className = {gridClasses.root} >
      <Grid container direction="row" spacing={2}>
      <Grid item xs={12} sm={6} align="center">
      <Card className={classes.card} onClick={redirect('/quickstart')} >
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Quick Start
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Just choose what area you want to focus and get to work
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Grid>
    <hr/>
    <Grid item xs={12} sm={6} align="center">
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
    </Grid>
    </Grid>

    </div>
  );
}
export default Home