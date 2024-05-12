import React from 'react'

export const UserContext = React.createContext({
  userId: null,
  setUserId: () => {},
  gamestateId: null,
  setGamestateId: () => {},
  cookieCount: 0,
  setCookieCount: () => {},
  cookiesPerClick: 1,
  setCookiesPerClick: (value) => {}, 
})