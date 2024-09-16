import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import MainHome from './pages/MainHome';
import NewYork from './pages/cities/NewYork';
import Pune from './pages/cities/Pune';
import Milan from './pages/cities/Milan';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route >
      <Route exact path='/' element={<MainHome />} />
      <Route exact path='pune' element={<Pune />} />
      <Route exact path='newyork' element={<NewYork />} />
      <Route exact path='milan' element={<Milan />} />

    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
