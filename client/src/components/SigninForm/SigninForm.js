import React, {useContext} from './node_modules/react';
import { makeStyles } from './node_modules/@material-ui/core/styles';
import TextField from './node_modules/@material-ui/core/TextField';
import Button from './node_modules/@material-ui/core/Button';
import Container from './node_modules/@material-ui/core/Container';
import FormControl from './node_modules/@material-ui/core/FormControl';
import Typography from './node_modules/@material-ui/core/Typography';
import Card from './node_modules/@material-ui/core/Card';
import CardActions from './node_modules/@material-ui/core/CardActions';
import CardContent from './node_modules/@material-ui/core/CardContent';

import RegContext from '../../utils/RegContext'


const useStyles = makeStyles(theme => ({
    root: {
        '& .MuiTextField-root': {
          margin: theme.spacing(1),
          width: 200,
        },
      },
      card: {
        position: "",
        minWidth: 275,
        maxWidth:650
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
      }  
    }));

const SigninForm = () => {
    const classes = useStyles();
    const {handleInputChange} = useContext(RegContext)
    return (
        <Container maxWitdth ="sm">
        <Card className={classes.card} variant="outlined">
            
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Welcome! Sign In
        </Typography>
        <Typography variant="h5" component="h2">
          
        <Container  maxWidth ="sm">
        <FormControl>
      <div className={classes.root}>
        <div>
        <TextField
            label="Username"
            id="margin-none"
            className={classes.textField}
          />
          <TextField
            label="Password"
            id="margin-none"
            className={classes.textField}
          />
        </div>
       <br/>
        <Button variant="contained" color="primary" onChange= {handleInputChange}> Submit </Button>
        </div>
      </FormControl>
      </Container>
        </Typography>
       <br/> 
        <Typography className={classes.pos} color="textSecondary">
          Input any text here
        </Typography>
      </CardContent>
      <CardActions>
      </CardActions>
    </Card>
    </Container>
    );
  }

  export default SigninForm


