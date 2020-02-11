import React, { useEffect, useState } from 'react'
import EventAPI from '../../utils/EventAPI'
import Container from '@material-ui/core/Container'
import WorkoutPanel from '../../components/WorkoutPanel'

const Recent = () => {
  const [ recentState, setRecentState ] = useState({
    recentWorkouts: []
  })
  const [ expanded, setExpanded ] = useState('panel1')

  const handleChange = panel => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false)
  }

  useEffect(() => {
    EventAPI.getUserEvents()
      .then(({ data: recentWorkouts }) => {
        setRecentState({ ...recentState, recentWorkouts })
        console.log(recentWorkouts)
      })
      .catch(e => console.error(e))
  }, [])

  return (
    <Container>
      <div>
        <WorkoutPanel 
          expanded={expanded} 
          handleChange={handleChange} 
          name='Workout Name'
          date='Jan 17, 2020 7:35pm'
          id="5e3d4dcd673c713b0c043ecd"
          area='upper'
          exercises={[{name:'Bob'},{name:'John'},{name:'Jimmy'}]}
        />
      </div>
    </Container>
  )
}

export default Recent