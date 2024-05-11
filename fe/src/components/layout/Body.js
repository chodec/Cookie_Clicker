import React, { useState, useEffect, useContext} from 'react'
import cursor from '../../assets/cursor.png'
import granny from '../../assets/granny.png'
import factory from '../../assets/factory.png'
import UseUserCreateState from '../../hooks/useCreateUserApi.js'
import { UserContext } from './UserContext.js'

const Body = () => {
    const [placeholder, setPlaceholder] = useState('Enter nickname for register')
    const [nickname, setNickname] = useState('')
    const { createUser, userId } = UseUserCreateState()
    const { setUserId } = useContext(UserContext)

    
    const handleRegisterClick = async () => {
        if (nickname) {
            try {
                const userId = await createUser(nickname)
                setUserId(userId)
            } catch (error) {
                console.error(error)
            }
        }
    }
    
    useEffect(() => {
        const placeholders = ['Enter nickname for register', 'Set ID for save']
        let index = 0

        const interval = setInterval(() => {
            index = index + 1 === placeholders.length ? 0 : index + 1
            setPlaceholder(placeholders[index])
        }, 3000)

        return () => clearInterval(interval)
    }, [])

    //Context obali appku na hiscore, hooky na API
    return (
            <div className="basis-1/2 bg-gray-700 h-screen">
                    <div className='h-1/4 border-white border-b-2'>
                        <button 
                            className="bg-white hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
                        >
                            Show HiScore
                        </button>
                        <form className="w-full max-w-sm">
                            <div className="flex items-center py-2">
                                <input 
                                    className="bg-transparent text-white border-none w-full mr-3 py-1 px-2 leading-tight focus:outline-none"
                                    type="text"
                                    placeholder={placeholder}
                                    aria-label="Nickname" 
                                    value={nickname}
                                    onChange={e => setNickname(e.target.value)}
                                />
                                <button 
                                    className="bg-white hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mr-1" 
                                    type="button"
                                    onClick={handleRegisterClick}
                                >
                                    Register
                                </button>
                                <button 
                                    className="bg-white hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" 
                                    type="button"
                                >
                                    Save
                                </button>
                            </div>
                        </form>
                        {userId && <p className="text-white">User ID: {userId}</p>}
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
