import React from "react";
import { useGlobalContext } from "./Contexts/context";

function SearchBar (){
    const {query, setQuery,iserror}=useGlobalContext();
    return(
        <>
        <section className="search-section">
            <h2>Search the movie</h2> 
            <form onSubmit={(e)=> e.preventDefault()}>
                <div>
                    <input type="text" placeholder="search here" value={query} onChange={(e)=> setQuery(e.target.value)}/>
                </div>
            </form>
        </section>
        </>
    )
}
export default SearchBar