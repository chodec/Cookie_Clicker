import { useState } from 'react'
import axios from 'axios'

const UseUserCreateState = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [userId, setUserId] = useState(null)

    const createUser = (nickname) => { 
        setLoading(true)
        axios.post(`http://localhost:8000/createUser/${nickname}`)
            .then(userResponse => {
                const userId = userResponse.data.id
                console.log(userId)
                setUserId(userId)
                axios.post(`http://localhost:8000/createGameState/${userId}`)
                    .then(gameStateResponse => {
                        console.log(gameStateResponse.data.id)
                    })
                    .catch(err => {
                        console.error(err)
                    })
            })
            .then(() => {
                setLoading(false)
            })
            .catch(err => {
                setError(err.message)
                setLoading(false)
            })
    }

    return { createUser, loading, error, userId }
}


export default UseUserCreateState