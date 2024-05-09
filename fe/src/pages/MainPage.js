import React from 'react'
import Navbar from '../components/layout/NavBar'
import Cookie from '../components/layout/Cookie'
import Display from '../components/layout/Body'
import Upgrades from '../components/layout/Upgrades'

const Main = () => {
    return (
        <div>
            <Navbar />
            <div className="flex flex-row text-center">
                <Cookie />
                <Display />
                <Upgrades />
            </div>
        </div>
    )
}

export default Main