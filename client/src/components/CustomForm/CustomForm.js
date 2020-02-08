import React, { useContext, useEffect, useState } from 'react'
import CustomContext from '../../utils/CustomContext'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'
import AsyncAutoComplete from '../AsyncAutoComplete'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Switch from '@material-ui/core/Switch'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'



const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(2),

    },
  },
}))

const useButtonStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),

    },
  },
}))

const CustomForm = () => {

  const [checked, setChecked] = useState(false)
  const [lbchecked, lbsetChecked] = useState(false)

  const toggleChecked = () => {
    setChecked(prev => !prev)
  }

  const toggleLBChecked = () => {
    lbsetChecked(prev => !prev)
  }

  const classes = useStyles()
  const buttonClasses = useButtonStyles()
  const { handleCustomAddExercise, workoutTitle, handleCustomTitleChange, setArea } = useContext(CustomContext)

  useEffect(() => {
    setArea(checked ? 'lower' : 'upper')
  }, [checked])

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="outlined-basic" label="Name your workout" variant="outlined" value={workoutTitle} onChange={handleCustomTitleChange} />
      <AsyncAutoComplete />
      <Grid component="label" container alignItems="center" spacing={1}>
        <Grid item>
          {/* <Switch
            checked={checked}
            onChange={toggleChecked}
          /> */}
          <FormControlLabel
        control={<Switch checked={checked} onChange={toggleChecked} />}
        label= {checked ? "Lower Body" : "Upper Body"}      
      />
        </Grid>
      </Grid>
      
      <br></br>
      <Button className={buttonClasses.root} variant="contained" color="primary" onClick={handleCustomAddExercise}>
        Add Exercise
      </Button>

    </form>
  )
}

export default CustomForm