import { useState, useEffect } from 'react'
import axios from 'axios'

const useFetchUsers = () => {
    const [users, setUsers] = useState([])

    const fetchUsers = async () => {
        try {
            const response = await axios.get('http://localhost:8000/getAllUsers')
            setUsers(response.data)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        fetchUsers()
    }, [])

    return { users, refetch: fetchUsers }
}

export default useFetchUsers