import React, {createContext} from 'react'

const RegContext = createContext ({
    name: '',
    username: '',
    age: '',
    weight: '',
    handleInputChange: () => {},
    handleAddReg: () => {}
    
})

export default RegContext