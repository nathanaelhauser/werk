import React, { useEffect, useContext } from 'react'
import CustomContext from '../../utils/CustomContext'
import axios from 'axios'
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'
import AsyncAutoComplete from '../AsyncAutoComplete'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
  
    },
  },
}));

const useButtonStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    
    },
  },
}));

// useEffect(() => {
// }, [])

const CustomForm = () => {
  const classes = useStyles();
  const buttonClasses = useButtonStyles()
  const { handleCustomInputSelect, workout, exercise} = useContext(CustomContext)

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="outlined-basic" label="Name your workout" variant="outlined" value={workout}/>
      <AsyncAutoComplete value={exercise}/>
      <Button className={buttonClasses.root} variant="contained" color="primary" onClick={handleCustomInputSelect}>
        Add Exercise
      </Button>

    </form>
  );
}



export default CustomForm