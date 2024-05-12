import React, { useContext } from 'react'
import cookie from '../../assets/Cookie.png'
import { UserContext } from './UserContext'

const Cookie = () => {
    const { userId, cookieCount, setCookieCount, cookiesPerClick } = useContext(UserContext)

    const handleCookieClick = () => {
        if (userId && typeof cookiesPerClick === 'number') {
            setCookieCount(prevCount => prevCount + cookiesPerClick)
        }
    }

    return (
        <div className="basis-1/4 bg-gray-800 flex flex-col h-screen items-center justify-center">
            <img 
                src={cookie} 
                alt='cookie' 
                className='w-1/2 h-auto' 
                onClick={handleCookieClick}
            />
            <h1 className='text-white'>Cookie count: {cookieCount}</h1>
            { !userId && <h2 className='text-red-500'>Register first</h2> }
        </div>
    )
}

export default Cookie
