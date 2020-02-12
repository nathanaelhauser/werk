import React, { useState } from 'react'
import Parallaxx from '../../components/Parallaxx'
import LandingContext from '../../utils/LandingContext'
import LandingCard from '../../components/LandingCard'
import lift from './LandingImages/lift.jpg'
import squat from './LandingImages/squat.jpg'
import team from './LandingImages/team.jpg'
import Grid from '@material-ui/core/Grid'
import { Typography } from '@material-ui/core'

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
            <br/>
            <Grid container spacing={4} align="center">
                <Grid item xs={12}>
                    <Typography>
                        WERK helps you reach your fitness goals
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={4} align="center">
                    <LandingCard
                        image={lift}
                        benefit="Build Custom Workouts"
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4} align="center">
                    <LandingCard
                        image={squat}
                        benefit="Access To Our Workouts"
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4} align="center">
                    <LandingCard
                        image={team}
                        benefit="Join A Fitness Community"
                    />
                </Grid>
            </Grid>
            

        </LandingContext.Provider>
    )
}

export default Landing