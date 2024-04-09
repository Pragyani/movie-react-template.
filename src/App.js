import React from 'react';
import './App.css';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Home from './homeComponent/Home';
import MovieData from './MoviesApiData/SinglemovieData';
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='HOME' element={<Home/>}/>
      <Route path='movie/:id' element={<MovieData/>}/>
    </Routes>
    </BrowserRouter>

    </>
  );
}

export default App;