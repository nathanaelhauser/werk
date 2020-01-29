import React, { useState } from 'react'
import AutoWhatever from 'react-autowhatever'

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
      <AutoWhatever 
        
      />
    </div>
  )
}
export default Custom