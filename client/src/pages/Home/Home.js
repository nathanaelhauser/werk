import React, { useState } from 'react';
import { Redirect } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import ExerciseCard from '../../components/ExerciseCard'

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
  const [goCustom, setGoCustom] = useState(false)
  const [goQuickstart, setGoQuickstart] = useState(false)
  const redirect = page => event => window.location.href = `http://${window.location.host}${page}`
 
  const renderRedirectCustom = () => {
    if (goCustom) {
      return <Redirect to="/custom" />
    }
  }

  const renderRedirectQuickstart = () => {
    if (goQuickstart) {
      return <Redirect to="/quickstart" />
    }
  }

  return (
    <div className = {gridClasses.root} >
      {renderRedirectCustom()}
      {renderRedirectQuickstart()}
      <Grid container direction="row" >
      <Grid item xs={12} sm={6} align="center">
      <Card className={classes.card} onClick={() => setGoQuickstart(true)} >
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
    <br/>
    </Grid>
    <Grid item xs={12} sm={6} align="center">
    <Card className={classes.card} onClick={() => setGoCustom(true)}>
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
  <ExerciseCard/>
    </div>
  );
}
export default Home