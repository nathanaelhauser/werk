import React, { useEffect, useState } from 'react'
import ExerciseCard from '../../components/ExerciseCard'
import UserAuthAPI from '../../utils/UserAuthAPI'
import UnauthorizedRedirect from '../../components/UnauthorizedRedirect'
import ExerciseContext from '../../utils/ExerciseContext'





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
       <ExerciseContext.Provider value ={ExerciseContext}>
        <UnauthorizedRedirect authorized={authorizedState} />
        <ExerciseCard>
        </ExerciseCard>
        </ExerciseContext.Provider>
        </>
    )
}
    
export default Exercises