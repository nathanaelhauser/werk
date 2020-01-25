import React, {useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import FormControl from '@material-ui/core/FormControl'
import Input from '@material-ui/core/Input'
import InputAdornment from '@material-ui/core/InputAdornment'

const useStyles = makeStyles(theme => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: 200,
      },
    },
  }));

const RegForm = () =>{
    const classes = useStyles();

    return (
    <Container  maxWidth ="sm">
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
          <FormControl/>
          <Input
            id="standard-adornment-weight"
           // value={values.weight}
            //onChange={handleChange('weight')}
            endAdornment={<InputAdornment position="end">Lb</InputAdornment>}
            aria-describedby="standard-weight-helper-text"
            inputProps={{
              'aria-label': 'weight',
            }}
          />
        </div>
       <br/>
        <Button variant="contained" color="primary"> Submit </Button>
      </div>
      </Container>
    );
  }
export default RegForm


