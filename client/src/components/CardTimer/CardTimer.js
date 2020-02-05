import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
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
      fontSize: 24,
    },
    pos: {
      marginBottom: 12,
    },
    mins: {
      fontSize: 40,
      display: 'inline-block',
      alignItems: 'center'
    },
    secs: {
      fontSize: 40,
      display: 'inline-block',
      alignItems: 'right'
    }
  });

  const CardTimer = () => {
    const classes = useStyles();
   
  
    return (
    <Container maxWidth = "md">
      <br/>
      <Card className={classes.card} variant="outlined">
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            TIMER
          </Typography>
          <Timer
                initialTime={60000}
                startImmediately={false}
                direction="backward"
                checkpoints={[ 
                    {
                    time: 45000,
                    callback: () => console.log('CheckPoint A')
                    },
                    {
                    time: 30000,
                    callback: () => console.log('Checkpoint B'),
                    },
                    {
                    time: 15000,
                    callback: () => console.log('Checkpoint C'),
                    }
                ]}
          >
         {({ start, resume, pause, stop, reset, timerState }) => (
        <React.Fragment>
            <div>
              <br/>
              <Typography className={classes.mins} color="primary">----- <Timer.Minutes/> Mins -----</Typography>
                <br/>
              <Typography className={classes.secs} color="primary">----- <Timer.Seconds/> Secs -----</Typography>
                
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