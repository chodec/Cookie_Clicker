import { useState } from 'react'
import axios from 'axios'

const UseUserCreateState = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const createUser = async (nickname) => {
        setLoading(true)
        try {
            const userResponse = await axios.post(`http://localhost:8000/createUser/${nickname}`)
            console.log(userResponse)
            const userId = userResponse.id
            console.log(userId)
            const gameStateResponse = await axios.post(`http://localhost:8000/createGameState/${userId}`)

            setLoading(false)
            return { user: userResponse.data, gameState: gameStateResponse.data }
        } catch (err) {
            setError(err.message)
            setLoading(false)
        }
    }

    return { createUser, loading, error }
}

export default UseUserCreateState