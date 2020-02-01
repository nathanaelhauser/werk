import React, { useContext } from 'react'
import CustomContext from '../../utils/CustomContext'
import Custom from '../../pages/Custom/Custom'

const CustomList = () => {

  const { exercises } = useContext(CustomContext)

  return(
    <div>
      {
        exercises.length? exercises.map(exercise => (
          <p>
            Hello
          </p>
        ))
      }
    </div>
  )
}

export default CustomList