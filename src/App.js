import React, { lazy, Suspense, useContext, useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Outlet, Navigate, Redirect, useLocation } from 'react-router-dom';

import Game from './pages/Game';
import Movies from './pages/Movies';

import './App.css';
import { GAME, MOVIE, HOME } from './constants/routes';
import Home from './pages/Home';
export default function App() {
  return (
    <div className={`max-w-screen w-full flex bg-white overflow-x-hidden`}>
      <BrowserRouter>
          <Suspense fallback={null} >
        <Routes>
            <Route path={HOME} element={<Home/>} exact />
            <Route path={GAME} element={<Game />} exact />
            <Route path={MOVIE} element={<Movies />} exact />
        </Routes>
          </Suspense>
      </BrowserRouter>
    </div>
  )
}