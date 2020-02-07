import React, { useEffect, useState } from 'react'
import ExerciseCard from '../../components/ExerciseCard'
import UserAuthAPI from '../../utils/UserAuthAPI'
import UnauthorizedRedirect from '../../components/UnauthorizedRedirect'
import ExerciseAPI from '../../utils/ExerciseAPI'
import ExerciseContext from '../../utils/ExerciseContext'
import WorkoutAPI from '../../utils/WorkoutAPI'

const {getExercises} = ExerciseAPI
const {createWorkout} = WorkoutAPI

const Exercises = () => {
    const [authorizedState, setAuthorizedState] = useState(true)
    const [exerciseState, setExerciseState] = useState({
        exerciseName: '',
        mainMuscles: '',
        secondaryMuscles: '',
        exerciseDespcription: '',
        exerciseEquipment: '',
        addFav: [],
    })
    
exerciseState.handleAddFav= event =>{
    event.preventDefault()
    createWorkout({})
}

exerciseState.getExercises=() =>

    useEffect(() => {
        UserAuthAPI.authorizeUser()
            .then(({ data: { isAuthorized } }) => {
                setAuthorizedState(isAuthorized)
            })
            .catch(e => console.error(e))
    }, [])

    return (
        <>
        <ExerciseContext.Provider value = {exerciseState}>
            <UnauthorizedRedirect authorized={authorizedState} />
            <ExerciseCard/>
        </ExerciseContext.Provider>
        </>
    )

}

export default Exercises