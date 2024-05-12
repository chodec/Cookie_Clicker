import { useState } from 'react'

const useSaveGameState = () => {
    const [status, setStatus] = useState('idle')

    const saveGameState = async (gameStateId, cookieCount, clickValue) => {
        setStatus('saving')

        try {
            const response = await fetch(`http://localhost:8000/saveGameState/${gameStateId}/${cookieCount}/${clickValue}`, {
                method: 'PUT',
            })

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`)
            }

            setStatus('saved')
        } catch (error) {
            console.error(error)
            setStatus('error')
        }
    }

    return { status, saveGameState }
}

export default useSaveGameState