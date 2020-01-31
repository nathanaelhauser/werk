import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container'
import Timer from 'react-compound-timer'

const useStyles = makeStyles({
    card: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });

  const CardTimer = () => {
    const classes = useStyles();
   
  
    return (
    <Container maxWidth = "md">
      <Card className={classes.card} variant="outlined">
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            Hit Start 
          </Typography>
          <Timer
                initialTime={60000}
                startImmediately={false}
                direction="backward"
          >
         {({ start, resume, pause, stop, reset, timerState }) => (
        <React.Fragment>
            <div>
                <Timer.Minutes/> Mins
                <br/>
                <Timer.Seconds/> Secs
            </div>
            {/* <div>{timerState}</div> */}
            <br />
            <div>
                <Button onClick={start}>Start</Button>
                <Button onClick={pause}>Pause</Button>
                <Button onClick={reset}>Reset</Button>
            </div>
        </React.Fragment>
    )}
</Timer>
        </CardContent>
      </Card>
      </Container>
    );
  }
export default CardTimer