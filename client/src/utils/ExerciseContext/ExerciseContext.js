import {createContext} from 'react'


const ExerciseContext = createContext({
    exerciseName: '',
    mainMuscles: '',
    secondaryMuscles: '',
    exerciseDespcription: '',
    exerciseEquipment: '',
     handleAddFav: () => {},
     removeFromFav: () => {}


})
export default ExerciseContext