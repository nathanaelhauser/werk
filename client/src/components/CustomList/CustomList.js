import React, { useContext } from 'react'
import CustomContext from '../../utils/CustomContext'
import Custom from '../../pages/Custom/Custom'

const CustomList = () => {

  const { exercises, handleCustomRemoveExercise } = useContext(CustomContext)

  return(
    <div>
    {
      exercises.length ? exercises.map(exercise => (
        <p>
          <span>{exercise.text}</span>
          <button onClick={() => handleCustomRemoveExercise(exercise._id)}>X</button>
        </p>
        )) : null
    }
    </div>
  )
}

export default CustomList