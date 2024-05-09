// Cookie.js
import React from 'react'
import cookie from '../../assets/cookie.png'

const Cookie = () => {
    return (
        <div className="basis-1/4 bg-gray-800 flex flex-col h-screen items-center justify-center">
            <img src={cookie} alt='cookie' className='w-1/2 h-auto'/>
            <h1 className='text-white'>Cookie count: 0</h1>
        </div>
    )
}

export default Cookie
