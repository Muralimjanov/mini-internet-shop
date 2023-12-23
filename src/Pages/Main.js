import React, { useEffect } from 'react';
import Cart from '../Components/Cart/Cart';
import Home from '../Components/Home/Home';
import { Route, Routes } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
        </div>
    )
}

export default Main;