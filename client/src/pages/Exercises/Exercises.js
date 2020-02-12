import React, { useEffect, useState } from 'react'
import ExerciseCard from '../../components/ExerciseCard'
import UserAuthAPI from '../../utils/UserAuthAPI'
import UnauthorizedRedirect from '../../components/UnauthorizedRedirect'
import ExerciseAPI from '../../utils/ExerciseAPI'
import ExerciseContext from '../../utils/ExerciseContext'
import WorkoutAPI from '../../utils/WorkoutAPI'

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
            <br/>
            <ExerciseCard/>
        </>
    )

}

export default Exercises