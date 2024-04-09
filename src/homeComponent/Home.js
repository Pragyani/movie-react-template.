import React, { useContext } from "react";
import { useGlobalContext } from "../Contexts/context";
// import { AppContext } from "../Contexts/context";

function Home() {
    // const name =useContext(AppContext)
    const name = useGlobalContext();

    return (
        <>
            <h1>Good Morning!</h1>
            <h3> i am a Home Page</h3>
            <h2>{name}</h2>
        </>
    )
}

export default Home