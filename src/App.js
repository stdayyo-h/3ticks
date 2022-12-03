import React, { lazy, Suspense, useContext, useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Outlet, Navigate, Redirect, useLocation } from 'react-router-dom';

import Game from './pages/Game';

import './App.css';
import { GAME } from './constants/routes';
export default function App() {
  return (
    <div className={`max-w-screen w-full flex bg-white overflow-x-hidden`}>
      <BrowserRouter>
          <Suspense fallback={null} >
        <Routes>
            <Route path={GAME} element={<Game />} exact />
        </Routes>
          </Suspense>
      </BrowserRouter>
    </div>
  )
}