import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import User from './User/User';

const router = createBrowserRouter([
  {
     path: "/",
     element: <App></App>,
  },
  {
      path: "/users",
      element: <User></User>,
  },


]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
 <RouterProvider router={router} />
  </React.StrictMode>
);

