import React from 'react'
import cursor from '../../assets/cursor.png'
import granny from '../../assets/granny.png'
import factory from '../../assets/factory.png'

const Upgrades = () => {
    return (
        <div className="basis-1/4 bg-gray-800 h-screen text-white">
            <h1 className="text-2xl mb-4">Upgrade List</h1>
            <div className="p-2 mb-2 text-left flex">
                <div className='basis-1/2'>
                    <img src={cursor} alt="Upgrade 1" className="w-1/2 h-auto" />
                </div>
                <div className='basis-1/2'>
                    <h2>Clicker boost</h2>
                    <p>+1 on click</p>
                    <p>Cost: 5 </p>
                </div>
            </div>
            <div className="p-2 mb-2 text-left flex">
                <div className='basis-1/2'>
                    <img src={granny} alt="Upgrade 2" className="w-1/2 h-auto" />
                </div>
                <div className='basis-1/2'>
                    <h2>Granny</h2>
                    <p>+1 Cookie/sec</p>
                    <p>Cost: 10</p>
                </div>
            </div>
            <div className="p-2 mb-2 text-left flex">
                <div className='basis-1/2'>
                    <img src={factory} alt="Upgrade 2" className="w-1/2 h-auto" />
                </div>
                <div className='basis-1/2'>
                    <h2>Factory</h2>
                    <p>+10 Cookie/sec</p>
                    <p>Cost: 20</p>
                </div>
            </div>
        </div>
    )
}

export default Upgrades
