import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './pages/home'
import Prodects from './pages/prodects'
import Prodect from './pages/prodect'
import AddProdect from './pages/addProdects'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement: <h1>Not Found.....</h1>
  },

  {
    path: "/prodects",
    element: <Prodects/>,
    
  },

  {
    path: "/Prodect",
    element: <Prodect/>,
    
  },

  {
    path: "/addProdect",
    element: <AddProdect/>,
    
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

