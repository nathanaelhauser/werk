import React, { useState } from 'react'
import { Typography } from '@material-ui/core'
import AsyncAutoComplete from '../../components/AsyncAutoComplete'
import CustomForm from '../../components/CustomForm'

const Custom = () => {

  const [customState, setCustomState] = useState({
    value: ''
  })

  customState.handleInputChange = event => {
    setCustomState({ ...customState, value: event.target.value })
  }

  customState.handleInputSelect = value => {
    setCustomState({ ...customState, value })
  }

  return (
    <div>
           <Typography variant="h6">build WERKout</Typography>
      <br />
      <AsyncAutoComplete />
      <br/>
      <CustomForm />
    </div>
  )
}
export default Custom