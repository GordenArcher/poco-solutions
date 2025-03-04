import { createContext, useState } from "react"


export const AuthContext = createContext()

const ContextProvider = ({ children }) => {

    const [showLogin, setShowLogin] = useState(false)

    return (
        <AuthContext.Provider value={{showLogin, setShowLogin}}>
            {children}
        </AuthContext.Provider>
    )

    
  
}


export default ContextProvider