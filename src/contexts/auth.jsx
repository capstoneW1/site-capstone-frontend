import { createContext, useState, useContext} from "react"
import React from "react"

const AuthContext = createContext(null)


/*
AuthContextProvider component will give the authValue to each child
component to have access and use that data for features like the login
and logout feature. Will be rendered in App.jsx
 */
export const AuthContextProvider = ( { children }) => {
    const [user, setUser] = React.useState({})
    const [refresh, setRefresh] = React.useState(false)
    const [initialized, setInitialized] = React.useState(false)
    const [isProcessing, setIsProcessing] = React.useState(false)
    const [error, setError] = React.useState({})

    const authValue = { user, setUser, refresh, setRefresh, initialized, setInitialized, isProcessing, setIsProcessing, error, setError }

    return (
        <AuthContext.Provider value = {authValue}>
            <>{children}</>
        </AuthContext.Provider>
    )
}

export const useAuthContext = () => useContext(AuthContext)