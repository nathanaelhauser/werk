import {createContext} from 'react'


const ExerciseContext = createContext({
    exercise: [],
    exerciseName: '',
    mainMuscles: '',
    secondaryMuscles: '',
    exerciseDespcription: '',
    exerciseEquipment: '',

})
export default ExerciseContext