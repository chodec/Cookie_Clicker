// Display.js
import React, { useState, useEffect } from 'react'
import cursor from '../../assets/cursor.png'
import granny from '../../assets/granny.png'
import factory from '../../assets/factory.png'

const Body = () => {
    const [placeholder, setPlaceholder] = useState('Enter nickname for register')

    useEffect(() => {
        const placeholders = ['Enter nickname for register', 'Set ID for save']
        let index = 0

        const interval = setInterval(() => {
            index = index + 1 === placeholders.length ? 0 : index + 1
            setPlaceholder(placeholders[index])
        }, 3000)

        return () => clearInterval(interval)
    }, [])

    return (
        <div className="basis-1/2 bg-gray-700 h-screen">
            <div className='h-1/4 border-white border-b-2'>
                <button class="bg-white hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                    Show HiScore
                </button>
                <form class="w-full max-w-sm">
                    <div class="flex items-center py-2">
                        <input class="bg-transparent text-white border-none w-full mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder={placeholder} aria-label="Nickname" />
                        <button class="bg-white hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mr-1" type="button">
                            Register
                        </button>
                        <button class="bg-white hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" type="button">
                            Save
                        </button>
                    </div>
                </form>
            </div>

            <div className='h-3/4 text-white'>
                <div className='flex pb-4'>
                    <p>Clicker boosts: 2</p>
                    <img src={cursor} alt="Upgrade 1" className="w-14 h-14" />
                    <img src={cursor} alt="Upgrade 1" className="w-14 h-14" />
                </div>
                <div className='flex pb-4'>
                    <p>Grannies: 4</p>
                    <img src={granny} alt="Upgrade 1" className="w-14 h-14" />
                    <img src={granny} alt="Upgrade 1" className="w-14 h-14" />
                    <img src={granny} alt="Upgrade 1" className="w-14 h-14" />
                    <img src={granny} alt="Upgrade 1" className="w-14 h-14" />
                </div>
                <div className='flex pb-4'>
                    <p>Factories: 1</p>
                    <img src={factory} alt="Upgrade 1" className="w-14 h-14" />
                </div>
            </div>
        </div>

    )
}

export default Body
