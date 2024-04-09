import React from "react";
import Movie from "./movie";
import { useParams } from "react-router-dom";

function MovieData() {

    const { id } = useParams();

    return (
        <>
            <h1>DATA OF THE MOVIE ,{id}</h1>
        </>
    )
}
export default MovieData