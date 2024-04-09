import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './homeComponent/Home';
import MovieData from './MoviesApiData/SinglemovieData';



function App() {
  return (
    <>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='movie/:id' element={<MovieData />} />
      </Routes>


    </>
  );
}

export default App;