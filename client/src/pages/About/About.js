import React from 'react'
import Nav from '../../components/Nav'
import DevCard from '../../components/DevCard'
import Grid from '@material-ui/core/Grid'

const About = () => {
    return (
        <Grid container spacing={4} align="center">
            <Grid item xs={12} sm={6} md={3} align="center">
                <DevCard
                    image="https://ca.slack-edge.com/TKAFG5QD9-ULXR8AFUZ-c9a095d1d510-512"
                    name="Nathan"
                    role="Git Master"
                    favorite="Anything Glute"
                />
            </Grid>
            <Grid item xs={12} sm={6} md={3} align="center">
                <DevCard
                    image="https://ca.slack-edge.com/TKAFG5QD9-ULY02C8P8-3d1863e1b1ef-512"
                    name="Mercedes"
                    role="Frontend Team"
                    favorite="Bench Press"
                />
            </Grid>
            <Grid item xs={12} sm={6} md={3} align="center">
                <DevCard
                    image="https://ca.slack-edge.com/TKAFG5QD9-ULJEQ5WAX-03a5b4778309-512"
                    name="Maverick"
                    role="Frontend Team"
                    favorite="Squats"
                />
            </Grid>
            <Grid item xs={12} sm={6} md={3} align="center">
                <DevCard
                    image="https://ca.slack-edge.com/TKAFG5QD9-ULMK37M6G-f205369b1b63-512"
                    name="Arturo"
                    role="Backend Team"
                    favorite="Pullups"
                />
            </Grid>
            <Grid item xs={12} sm={6} md={3} align="center">
                <DevCard
                    image="https://ca.slack-edge.com/TKAFG5QD9-ULPF1509X-39abf41164e2-512"
                    name="Kevin"
                    role="Backend Team"
                    favorite="Kettlebell Swings"
                />
            </Grid>
        </Grid>
                      
    )
}

export default About