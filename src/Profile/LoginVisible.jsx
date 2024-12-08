import React, { createContext, useState } from 'react'

export const VisibleContext = createContext() 

export default function LoginVisible({ children }) {
    const [isLoginVisible, setLoginVisible] = useState(false);
  
 return (
    <div>
      <VisibleContext.Provider value={{isLoginVisible, setLoginVisible}}>
      { children }
      </VisibleContext.Provider>
    </div>
  )
}
