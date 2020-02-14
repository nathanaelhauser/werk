import 'isomorphic-fetch'
import React, { useState, useEffect, Fragment, useContext } from 'react'
import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'
import CircularProgress from '@material-ui/core/CircularProgress'
import axios from 'axios'
import CustomContext from '../../utils/CustomContext'

const AsyncAutoComplete = () => {
  const [open, setOpen] = useState(false)
  const [options, setOptions] = useState([])
  const loading = open && options.length === 0
  const { handleCustomInputChange, area } = useContext(CustomContext)

  const handleInputChange = (event, exercise) => {
    const chosenExercise = options.filter(option => option.name === exercise)[0]
    handleCustomInputChange(event, chosenExercise)
  }

  useEffect(() => {
    let active = true

    if (!loading) {
      return undefined
    }

    (async () => {
      const response = await axios.get('/exercises')
      const { data: exercises } = await response

      if (active) {
        setOptions(
          exercises
            .filter(exercise => exercise.area === area)
            .map(({ name, _id }) => ({ name, _id }))
        )
      }
    })()

    return () => {
      active = false
    }
  }, [loading])

  useEffect(() => {
    if (!open) {
      setOptions([])
    }
  }, [open])

  return (
    <Autocomplete 
      id='async-demo'
      style={{ width: 300 }}
      open={open}
      onOpen={() => {
        setOpen(true)
      }}
      onClose={() => {
        setOpen(false)
      }}
      getOptionSelected={(option, value) => option.name === value.name}
      getOptionLabel={option => option.name}
      onInputChange={handleInputChange}
      options={options}
      loading={loading}
      renderInput={params => (
        <TextField
          {...params}
          label="Search Exercises"
          fullWidth
          variant="outlined"
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <Fragment>
                {loading ? <CircularProgress color="inherit" size={20} /> : ''}
                {params.InputProps.endAdornment}
              </Fragment>
            ),
          }}
        />
      )}
    />
  )
}

export default AsyncAutoComplete