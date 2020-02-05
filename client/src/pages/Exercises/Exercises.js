import React, { useEffect, useState } from 'react'
import CardTimer from '../../components/CardTimer'
import UserAuthAPI from '../../utils/UserAuthAPI'
import UnauthorizedRedirect from '../../components/UnauthorizedRedirect'

const Exercises = () => {
    const [authorizedState, setAuthorizedState] = useState(true)

    useEffect(() => {
        UserAuthAPI.authorizeUser()
            .then(({ data: { isAuthorized } }) => {
                setAuthorizedState(isAuthorized)
            })
            .catch(e => console.error(e))
    }, [])

    return (
        <>
            <UnauthorizedRedirect authorized={authorizedState} />
            <CardTimer />
        </>
    )
}
export default Exercises