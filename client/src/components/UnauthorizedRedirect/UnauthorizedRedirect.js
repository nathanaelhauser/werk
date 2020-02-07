import React from 'react'
import { Redirect } from 'react-router-dom'

const UnauthorizedRedirect = props => {
  return (
    <>
      {
        props.authorized
          ? '' 
          : <Redirect to='/' />
      }
    </>
  )
}

export default UnauthorizedRedirect