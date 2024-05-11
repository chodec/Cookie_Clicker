import { useState } from 'react'
import axios from 'axios'

const UseUserCreateState = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [userId, setUserId] = useState(null)

    const createUser = async (nickname) => { 
        setLoading(true)
        try {
            const userResponse = await axios.post(`http://localhost:8000/createUser/${nickname}`)
            const userId = userResponse.data.id
            setUserId(userId)
            await axios.post(`http://localhost:8000/createGameState/${userId}`)
            setLoading(false)
            return userId
        } catch (err) {
            setError(err.message)
            setLoading(false)
        }
    }

    return { createUser, loading, error, userId }
}


export default UseUserCreateState