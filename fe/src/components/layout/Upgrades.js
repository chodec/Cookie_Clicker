import React, { useState, useContext } from 'react'
import { UserContext } from './UserContext'
import useCreateAutoclicker from '../../hooks/useCreateAutoClicker.js'
import cursor from '../../assets/Cursor.png'
import granny from '../../assets/Granny.png'
import factory from '../../assets/Factory.png'

const Upgrades = () => {
    const { gamestateId, cookieCount, setCookieCount, setCookiesPerClick, setGrannyCount, setFactoryCount, setUpgradeCount, firstUpgradePurchased, setFirstUpgradePurchased } = useContext(UserContext)
    const { createAutoclicker } = useCreateAutoclicker()
    const [clickerBoostCost, setClickerBoostCost] = useState(5)
    const [grannyCost, setGrannyCost] = useState(10)
    const [factoryCost, setFactoryCost] = useState(20)

    const handleUpgradeClick = async (clickerName, cost, setCost) => {
        if (cookieCount >= cost) {
            if (clickerName === 'Cursor') {
                setCookiesPerClick(prevCount => prevCount + 1)
                setCookieCount(prevCount => Math.floor(prevCount - cost))
                setCost(prevCost => Math.floor(prevCost * 1.2))
            } else {
                await createAutoclicker(gamestateId, clickerName, cost)
                setCookieCount(prevCount => Math.floor(prevCount - cost))
                setCost(prevCost => Math.floor(prevCost * 1.2))
                if (clickerName === 'Granny') {
                    setGrannyCount(prevCount => prevCount + 1)
                }
                if (clickerName === 'Factory') {
                    setFactoryCount(prevCount => prevCount + 1)
                }
            }
            setUpgradeCount(prevCount => prevCount + 1)
    
            if (!firstUpgradePurchased) {
                setFirstUpgradePurchased(true)
            }
        }
    }

    return (
        <div className="basis-1/4 bg-gray-800 h-screen text-white">
            <h1 className="text-2xl mb-4 text-center">Upgrade List</h1>
            <div 
                className="p-2 mb-2 text-left flex"
                onClick={() => {
                    handleUpgradeClick('Clicker boost', clickerBoostCost, setClickerBoostCost)
                }}
            >
                <div className='basis-1/2'>
                    <img src={cursor} alt="Upgrade 1" className="w-1/2 h-auto" />
                </div>
                <div className='basis-1/2'>
                    <h2>Clicker boost</h2>
                    <p>+1 on click</p>
                    <p>Cost: {clickerBoostCost}</p>
                </div>
            </div>
            <div 
                className="p-2 mb-2 text-left flex" 
                onClick={() => {
                    handleUpgradeClick('Granny', grannyCost, setGrannyCost)
                }}
            >
                <div className='basis-1/2'>
                    <img src={granny} alt="Upgrade 2" className="w-1/2 h-auto" />
                </div>
                <div className='basis-1/2'>
                    <h2>Granny</h2>
                    <p>+1 Cookie/sec</p>
                    <p>Cost: {grannyCost}</p>
                </div>
            </div>
            <div 
                className="p-2 mb-2 text-left flex" 
                onClick={() => {
                    handleUpgradeClick('Factory', factoryCost, setFactoryCost)
                }}
            >
                <div className='basis-1/2'>
                    <img src={factory} alt="Upgrade 2" className="w-1/2 h-auto" />
                </div>
                <div className='basis-1/2'>
                    <h2>Factory</h2>
                    <p>+10 Cookie/sec</p>
                    <p>Cost: {factoryCost}</p>
                </div>
            </div>
        </div>
    )
}

export default Upgrades
