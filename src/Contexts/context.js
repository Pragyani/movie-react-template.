import React, { useContext , useEffect } from "react";

const API_URl = 'http://www.omdbapi.com/?apikey=48aa2fca&s=titanic'
const AppContext = React.createContext();

const AppProvider = ({ children }) => {

    
const TogetMovie = async (url) => {
    try {
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}



useEffect(() => {
    TogetMovie(API_URl);
}, [])

    return (<AppContext.Provider value="PragyAni">{children}</AppContext.Provider>)
}



const useGlobalContext = () => {
    return (
        useContext(AppContext)
    )
}

export { AppContext, AppProvider, useGlobalContext };