import React, { useContext, useEffect, useState } from "react";

const API_URl = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`
const AppContext = React.createContext();

const AppProvider = ({ children }) => {

    const [isLoading, setIsLoading] = useState(true)
    const [movie, setMovie] = useState([])
    const [iserror, setIserror] = useState({ show: "false", message: "" })
    const [query,setQuery]=useState("titanic")

    const TogetMovie = async (url) => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);

            if (data.Response === "True") {
                setIsLoading(false)
                setMovie(data.Search)
            } else {
                setIserror({ show: true, message: data.error })
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {

       let timeOut = setTimeout(()=>{
            TogetMovie(`${API_URl}&s=${query}`);
        },600)

        return ()=>clearTimeout(timeOut)
        
    }, [query])

    return (<AppContext.Provider value={{ isLoading, iserror, movie, query,setQuery }}>{children}</AppContext.Provider>)
}



const useGlobalContext = () => {
    return (
        useContext(AppContext)
    )
}

export { AppContext, AppProvider, useGlobalContext };