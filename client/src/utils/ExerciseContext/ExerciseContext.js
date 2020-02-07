import {createContext} from 'react'


const ExerciseContext = createContext({
    exerciseName: '',
    mainMuscles: '',
    secondaryMuscles: '',
    exerciseDespcription: '',
    exerciseEquipment: '',
    addFav: [],
    handleAddFav: () => {},
    removeFromFav: () => {}


})
export default ExerciseContext