import React from 'react'
import Nav from '../../components/Nav'
import DevCard from '../../components/DevCard'

const About = () => {
    return (
        <div>
            <DevCard
                image="https://ca.slack-edge.com/TKAFG5QD9-ULPF1509X-39abf41164e2-512"
                name="Kevin"
                role="Backend Team"
                favorite="Kettlebell Swings"
            />
            <DevCard
                image="https://ca.slack-edge.com/TKAFG5QD9-ULXR8AFUZ-c9a095d1d510-512"
                name="Nathan"
                role="Git / Scrum Master"
                favorite="All Glute Workouts"
            
            />
        </div>
    )
}

export default About