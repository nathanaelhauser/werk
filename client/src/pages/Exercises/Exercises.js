import React, { useEffect, useState } from 'react'
import ExerciseCard from '../../components/ExerciseCard'
import UserAuthAPI from '../../utils/UserAuthAPI'
import UnauthorizedRedirect from '../../components/UnauthorizedRedirect'

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
            <ExerciseCard/>
        </>
    )

}

export default Exercises