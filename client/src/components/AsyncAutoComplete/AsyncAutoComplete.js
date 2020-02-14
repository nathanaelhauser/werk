import React, 
       { useState, 
         useEffect, 
         Fragment, 
         useContext } from 'react'
import { TextField,
         CircularProgress } from '@material-ui/core'
import { Autocomplete } from '@material-ui/lab'
import CustomContext from '../../utils/CustomContext'
import axios from 'axios'
import 'isomorphic-fetch'

const filterArea = {
  upper: ['Arms', 'Abs', 'Shoulders', 'Chest', 'Back'],
  lower: ['Calves', 'Legs']
}

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
      console.log(exercises)
      if (active) {
        setOptions(
          exercises
            .filter(exercise => {
              const filter = filterArea[area]
              console.log(filter)
              console.log(exercise.category)
              return filter.includes(exercise.category)
            })
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
          size= "small"
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