import React, { useContext } from "react";

const API_URl = 'http://www.omdbapi.com/?apikey=48aa2fca&s=titanic'
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    return (<AppContext.Provider value="PragyAni">{children}</AppContext.Provider>)
}



const useGlobalContext = () => {
    return (
        useContext(AppContext)
    )
}

export { AppContext, AppProvider, useGlobalContext };