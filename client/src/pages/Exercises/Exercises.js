import React, { useEffect, useState } from 'react'
import ExerciseCard from '../../components/ExerciseCard'
import ExerciseList from '../../components/ExerciseList'
import UserAuthAPI from '../../utils/UserAuthAPI'
import UnauthorizedRedirect from '../../components/UnauthorizedRedirect'
import ExerciseAPI from '../../utils/ExerciseAPI'
import ExerciseContext from '../../utils/ExerciseContext'
import WorkoutAPI from '../../utils/WorkoutAPI'
import CardTimer from '../../components/CardTimer'

const Exercises = () => {
    const [authorizedState, setAuthorizedState] = useState(true)
  
    useEffect(() => {
        UserAuthAPI.authorizeUser()
            .then(({ data: { isAuthorized } }) => {
                setAuthorizedState(isAuthorized)
            })
            .catch(e => console.error(e))
    }, [])

    return (
        <>
            <UnauthorizedRedirect authorized={authorizedState} />
            
            <ExerciseCard>
            <ExerciseList/>
            </ExerciseCard>
        </>
    )

}

export default Exercises