import React, { useState } from 'react'
import { Typography } from '@material-ui/core'
import AsyncAutoComplete from '../../components/AsyncAutoComplete'
import CustomForm from '../../components/CustomForm'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';
import CustomCard from '../../components/CustomCard'
import CustomContext from '../../utils/CustomContext'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));


const Custom = () => {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();
 
  const [customState, setCustomState] = useState({
    workout: '',
    exercise: '',
    exercises: []
  })

  customState.handleCustomInputChange = event => {
    setCustomState({ ...customState, value: event.target.value })
  }

  customState.handleCustomInputSelect = value => {
    setCustomState({ ...customState, value })
  }

  return (
    <CustomContext.Provider value={customState}>
    <Grid container className={classes.root} spacing={2}>
    <Grid item xs={12}>
    <CustomForm/>
    </Grid>

  </Grid>
  </CustomContext.Provider>
  )
}
export default Custom