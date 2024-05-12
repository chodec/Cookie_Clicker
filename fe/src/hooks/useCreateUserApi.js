import { useState } from 'react'
import axios from 'axios'

const UseUserCreateState = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [userId, setUserId] = useState(null)
    const [gamestate_id, setGamestate_id] = useState(null)

    const createUser = async (nickname) => { 
        setLoading(true)
        try {
            const userResponse = await axios.post(`http://localhost:8000/createUser/${nickname}`)
            const userId = userResponse.data.id
            setUserId(userId)
            const gameStateResponse = await axios.post(`http://localhost:8000/createGameState/${userId}`)
            const gamestate_id = gameStateResponse.data.id
            setGamestate_id(gamestate_id)
            setLoading(false)
            return { userId, gamestate_id }
        } catch (err) {
            setError(err.message)
            setLoading(false)
        }
    }

    return { createUser, loading, error, userId, gamestate_id }
}


export default UseUserCreateState