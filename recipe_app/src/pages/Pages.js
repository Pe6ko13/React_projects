import React from 'react';
import Home from './Home';
import { Route, Routes } from 'react-router-dom';
import Cuisine from './Cuisine';
import Searched from './Searched';
import Rrecipe from './Rrecipe';

function Pages() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cuisine/:type' element={<Cuisine />} />
            <Route path='/searched/:search' element={<Searched />} />
            <Route path='/recipe/:name' element={<Rrecipe />} />
        </Routes>
    );
}

export default Pages;
