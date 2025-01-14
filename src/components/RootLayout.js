import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';
import { Provider } from 'react-redux'; 
import { store } from '../store/store';

function RootLayout() {
  return (
    <Provider store={ store }>
        <div>
       <NavBar />
      <main>
        <Outlet />
      </main>
    </div>
    </Provider>
  )
}

export default RootLayout
