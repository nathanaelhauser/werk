import React, {useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid'

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

const RegForm = () =>{
    const classes = useStyles();

    return (
        <Container maxWitdth ="sm">
        <Card className={classes.card} variant="outlined">
            
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Welcome! Register
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
            label="Name"
            id="margin-none"
            className={classes.textField}
          />
          <TextField
            label="Password"
            id="margin-none"
            className={classes.textField}
          />
          <TextField
            label="Comfirm Password"
            id="margin-none"
            className={classes.textField}
          />
          
          <TextField
            id="margin-none"
            label= "Starting Weight"
           // value={values.weight}
            //onChange={handleChange('weight')}
            aria-describedby="standard-weight-helper-text"
            inputProps={{'aria-label': 'weight',}}
          />
          <TextField
            label="Age"
            id="margin-none"
            className={classes.textField}
          />
        </div>
       <br/>
        <Button variant="contained" color="primary"> Submit </Button>
      </div>
      </FormControl>
      </Container>
        </Typography>
       <br/> 
        <Typography className={classes.pos} color="textSecondary">
          Input  any text here
        </Typography>
      </CardContent>
      <CardActions>
      </CardActions>
    </Card>
    </Container>
    );
  }
export default RegForm


