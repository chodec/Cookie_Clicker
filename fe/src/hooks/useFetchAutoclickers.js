import { useState, useEffect } from 'react'

const useFetchAutoclickers = (gameStateId, upgradeCount, firstUpgradePurchased) => {
    const [autoclickers, setAutoclickers] = useState([])

    useEffect(() => {
        const fetchAutoclickers = async () => {
            try {
                if (gameStateId && gameStateId !== null && firstUpgradePurchased) {
                    const response = await fetch(`http://localhost:8000/getAutoclicker/${gameStateId}`)
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`)
                    }
                    const data = await response.json()
                    setAutoclickers(data)
                }
            } catch (error) {
                console.error(error)
            }
        }

        fetchAutoclickers()
    }, [gameStateId, upgradeCount, firstUpgradePurchased])

    return autoclickers
}

export default useFetchAutoclickers