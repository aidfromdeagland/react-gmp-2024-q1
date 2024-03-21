import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MovieListPage from './MovieListPage.jsx'
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <MovieListPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
