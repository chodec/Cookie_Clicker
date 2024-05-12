import { useState } from 'react'
import axios from 'axios'

const useCreateAutoclicker = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const createAutoclicker = async (gameStateId, clickerName, stats) => { 
        setLoading(true)
        try {
            await axios.post(`http://localhost:8000/createAutoclicker/${gameStateId}/${clickerName}/${stats}`)
            setLoading(false)
        } catch (err) {
            setError(err.message)
            setLoading(false)
        }
    }

    return { createAutoclicker, loading, error }
}

export default useCreateAutoclicker