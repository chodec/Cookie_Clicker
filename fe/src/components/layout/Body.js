import React, { useState, useEffect, useContext} from 'react'
import UseUserCreateState from '../../hooks/useCreateUserApi.js'
import useFetchAutoclickers from '../../hooks/useFetchAutoclickers.js'
import { UserContext } from './UserContext.js'
import useFetchUsers from '../../hooks/useFetchUsers.js'
import useSaveGameState from '../../hooks/useSaveGameState'
import cursor from '../../assets/Cursor.png'
import granny from '../../assets/Granny.png'
import factory from '../../assets/Factory.png'


const Body = () => {
    const [placeholder, setPlaceholder] = useState('Enter nickname for register')
    const [nickname, setNickname] = useState('')
    const { setUserId, gamestateId, setGamestateId, firstUpgradePurchased, cookieCount, upgradeCount } = useContext(UserContext)
    const { createUser, userId } = UseUserCreateState()
    const [showUpgrades, setShowUpgrades] = useState(false)
    const { users, refetch } = useFetchUsers()
    const autoclickers = useFetchAutoclickers(gamestateId, upgradeCount, firstUpgradePurchased)
    const { saveGameState } = useSaveGameState()
    const clickValue = 1

    const handleButtonClick = () => {
        setShowUpgrades(!showUpgrades)
    }
    
    const handleRegisterClick = async () => {
        if (nickname) {
            try {
                const userId = await createUser(nickname)
                setUserId(userId.userId)
                setGamestateId(userId.gamestate_id)
                await saveGameState(gamestateId, cookieCount, clickValue);
                refetch()
            } catch (error) {
                console.error(error)
            }
        }
    }

    const handleSaveClick = async () => {
        // After saving the game state, refetch the users
        await saveGameState(gamestateId, cookieCount, clickValue);
        refetch();
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

    return (
        <div className="basis-1/2 bg-gray-700 h-screen p-3">
        <div className='h-1/4 border-white border-b-2 mb-4'>
          <button 
            className="bg-white hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
            onClick={ handleButtonClick }
          >
            { showUpgrades ? 'Show HiScore' : 'Show Upgrades' }
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
                onClick={handleSaveClick}
              >
                Save
              </button>
            </div>
          </form>
          {userId && <p className="text-white">User ID: {userId}</p>}
        </div>
        {showUpgrades ? (firstUpgradePurchased && <div className='h-3/4 text-white flex flex-row'>
          {autoclickers.map((autoclicker, i) => (
            <div className='p-1'>
              <img src={autoclicker.clicker_name === 'Cursor' ? cursor : autoclicker.clicker_name === 'Granny' ? granny : autoclicker.clicker_name === 'Factory' ? factory : cursor} alt={`Upgrade ${i + 1}`} className="w-14 h-14" />
            </div>
          ))}
        </div>
      ) : (
        <div className='h-3/4 text-white'>
          <table className="table-fixed">
            <thead>
              <tr>
                <th className="w-1/3 text-left">Rank</th>
                <th className="w-1/2 text-left">Name</th>
                <th className="w-1/2 text-left">Cookies</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, i) => (
                <tr key={i}>
                  <td>#{i + 1}</td>
                  <td>{user.nickname}</td>
                  <td>{user.cookie_count}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}  
      </div>
    )
  }
  
  export default Body