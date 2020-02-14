import React, { useEffect, useState, } from 'react'
import {makeStyles} from '@material-ui/core/styles'
import ExerciseCard from '../../components/ExerciseCard'
import UserAuthAPI from '../../utils/UserAuthAPI'
import UnauthorizedRedirect from '../../components/UnauthorizedRedirect'
import ExerciseContext from '../../utils/ExerciseContext'
import ExerciseAPI from '../../utils/ExerciseAPI'

const { getExercises } = ExerciseAPI

const useStyles = makeStyles(theme => ({
    root: {
      '& > *': {
        margin: theme.spacing(1) 
    },
  },
  typography: {"fontFamily": "\"Bangers\"",
      "fontSize": 30},
  titleTypography: {"fontFamily": "\"Bangers\"",
      "fontSize": 36}
      }))

const Exercises = () => {
    const [authorizedState, setAuthorizedState] = useState(true)
    const [ exerciseState, setExerciseState] = useState({ 
        exercises: []
    })

    useEffect(() => {
        UserAuthAPI.authorizeUser()
            .then(({ data: { isAuthorized } }) => {
                setAuthorizedState(isAuthorized)
            })
            .catch(e => console.error(e))
    }, [])

    useEffect(() => {
        getExercises()
            .then(({ data: exercises }) => setExerciseState({ ...exerciseState, exercises }))
            .catch(e => console.error(e))
    }, [])

    return (
        <>
            <ExerciseContext.Provider value={exerciseState}>
                <UnauthorizedRedirect authorized={authorizedState} />
                <ExerciseCard />
            </ExerciseContext.Provider>
        </>
    )
}

export default Exercises