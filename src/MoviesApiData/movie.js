import React from "react";
import { useGlobalContext } from "../Contexts/context";
import { NavLink } from "react-router-dom";

function Movie() {

    const { movie } = useGlobalContext();
    return (
        <>
            <section className="movie-page">
                <div className=" container grid grid-4-col">
                      {movie.map((currVal)=>{

                        const { imdbID , Title , Poster} = currVal

                        return <NavLink to={`movie/${imdbID}`} key={imdbID}>
                            <div className="card">
                                <div className="card-info">
                                 <h2>{Title}</h2>
                                 <img src={Poster} alt="logo"/>
                                </div>
                            </div>

                        </NavLink>
                      })}
                </div>
            </section>
        </>
    )
}
export default Movie