import React, { useEffect, useState } from 'react'
import moment from 'moment'
import EventAPI from '../../utils/EventAPI'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import WorkoutPanel from '../../components/WorkoutPanel'

const Recent = () => {
  const [recentState, setRecentState] = useState({
    events: []
  })
  const [expanded, setExpanded] = useState('panel1')

  const handleChange = panel => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false)
  }

  useEffect(() => {
    EventAPI.getUserEvents()
      .then(({ data: events }) => {
        setRecentState({ ...recentState, events })
        console.log(events)
      })
      .catch(e => console.error(e))
  }, [])

  return (
    <Container>
      <br/>
      <Typography variant="h6" align="center">
        Your Recent Workouts!
      </Typography>
      <div>
        {
          recentState.events
            ? recentState.events.map(event =>
              <WorkoutPanel
                expanded={expanded}
                handleChange={handleChange}
                name={event.workout.name}
                date={moment(event.createdAt, 'YYYY-MM-DDThh:mm:ss.SSSZ')
                        .format('LLL')
                    }
                id={event._id}
                area={event.workout.area}
                exercises={event.workout.exercises}
              />
            )
            : ''
        }
      </div>
    </Container>
  )
}

export default Recent