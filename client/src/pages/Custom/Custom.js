import React, { useState } from 'react'
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
      <h1>Custom Workout</h1>
      <br />
      <AsyncAutoComplete />
      <CustomForm />
    </div>
  )
}
export default Custom