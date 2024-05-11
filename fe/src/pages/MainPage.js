import React, { useState } from 'react'
import Navbar from '../components/layout/NavBar'
import Cookie from '../components/layout/Cookie'
import Display from '../components/layout/Body'
import Upgrades from '../components/layout/Upgrades'
import { UserContext } from '../components/layout/UserContext'

const Main = () => {
    const [userId, setUserId] = useState(null)

    return (
        <UserContext.Provider value={{ userId, setUserId }}>
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