import React, { useState, useEffect } from 'react'
import Navbar from '../components/layout/NavBar'
import Cookie from '../components/layout/Cookie'
import Display from '../components/layout/Body'
import Upgrades from '../components/layout/Upgrades'
import { UserContext } from '../components/layout/UserContext'

const Main = () => {
    const [userId, setUserId] = useState(null)
    const [gamestateId, setGamestateId] = useState(null)
    const [cookieCount, setCookieCount] = useState(0)
    const [cookiesPerClick, setCookiesPerClick] = useState(1) 
    const [grannyCount, setGrannyCount] = useState(0)
    const [factoryCount, setFactoryCount] = useState(0)
    const [upgradeCount, setUpgradeCount] = useState(0)
    const [firstUpgradePurchased, setFirstUpgradePurchased] = useState(false)

    useEffect(() => {
        const interval = setInterval(() => {
            setCookieCount(prevCount => prevCount + grannyCount + factoryCount * 10)
        }, 1000)
    
        return () => clearInterval(interval)
    }, [grannyCount, factoryCount])

    return (
        <UserContext.Provider value={{ userId, setUserId, gamestateId, setGamestateId, cookieCount, 
        setCookieCount, cookiesPerClick, setCookiesPerClick, grannyCount, setGrannyCount, factoryCount, setFactoryCount, upgradeCount, setUpgradeCount, firstUpgradePurchased, setFirstUpgradePurchased }}>
            <div>
                <Navbar />
                <div className="flex flex-row">
                    <Cookie />
                    <Display />
                    <Upgrades />
                </div>
            </div>
        </UserContext.Provider>
    );
}


export default Main