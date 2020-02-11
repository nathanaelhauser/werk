import React, { useEffect, useState } from 'react'
import EventAPI from '../../utils/EventAPI'

const Recent = () => {
  const [ recentState, setRecentState ] = useState({
    workouts: []
  })

  useEffect(() => {
    EventAPI.getUserEvents()
      .then(({ data }) => {
        console.log(data)
      })
      .catch(e => console.error(e))
  }, [])

  return (
    <h1>Recent Workouts</h1>
  )
}

export default Recent