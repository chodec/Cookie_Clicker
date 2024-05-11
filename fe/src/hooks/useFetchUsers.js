import { useState, useEffect } from 'react'
import axios from 'axios'

const useFetchUsers = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('http://localhost:8000/getAllUsers')
                setUsers(response.data)
            } catch (error) {
                console.error(error)
            }
        }

        fetchUsers()
    }, [])

    return users
}

export default useFetchUsers
