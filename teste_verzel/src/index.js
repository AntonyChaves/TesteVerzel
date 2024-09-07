import React from 'react';
import ReactDOM from 'react-dom/client';
import  './index.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import App from './App';
import Home from './Pages/Home';
import Search from './Pages/Search';
import Movie from './Pages/Movie';
import Favorites from './Pages/Favorites';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  

    <BrowserRouter>
      <Routes>

          <Route element={<App/> }>
            <Route path='/' element={<Home/>} />
            <Route path='movie/:id' element={<Movie/>} />
            <Route path='search' element={<Search/>} />
            <Route path='favorite' element={<Favorites/>}/>
          </Route>

      </Routes>
    </BrowserRouter>


);

