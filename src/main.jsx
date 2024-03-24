import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, defer } from "react-router-dom";
import { service as movieService } from './services/movie-service.js';
import MovieListPage from './MovieListPage.jsx'
import Search from './components/search/Search.jsx';
import MovieDetailsWithLoading from './components/movie-details/MovieDetailsWithLoading.jsx';
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <MovieListPage />,
    children: [
      {
        path: "/",
        element: <Search />,
      },
      {
        path: "/:movieId",
        element: <MovieDetailsWithLoading />,
        loader: async (routeData) => {
          const id = routeData.params.movieId;
          return id
            ? defer({ movie: movieService.getById(id) })
            : null;
        },
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
