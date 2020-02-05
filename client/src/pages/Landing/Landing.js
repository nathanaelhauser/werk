import React, { useState } from 'react'
import Parallaxx from '../../components/Parallaxx'
import LandingContext from '../../utils/LandingContext'

const Landing = () => {
    const [ landingState, setLandingState ] = useState({
        name: '',
        username: '',
        password: '',
        confirmPassword: '',
        age: 0,
        weight: 0
    })

    landingState.handleInputChange = event => {
        setLandingState({ ...landingState, [event.target.name]: event.target.value })
    }

    return (
        <LandingContext.Provider value={landingState}>
            <Parallaxx />
        </LandingContext.Provider>
    )
}

export default Landing