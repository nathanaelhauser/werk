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
  const { exercise, handleCustomInputChange } = useContext(CustomContext)
  useEffect(() => {
    let active = true

    if (!loading) {
      return undefined
    }

    (async () => {
      const response = await axios.get('/exercises')
      const { data: exercises } = await response

      if (active) {
        setOptions(exercises.map(({ name, _id }) => ({ name, _id })))
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
      options={options}
      loading={loading}
      renderInput={params => (
        <TextField
        value={exercise}
        onChange={handleCustomInputChange}
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