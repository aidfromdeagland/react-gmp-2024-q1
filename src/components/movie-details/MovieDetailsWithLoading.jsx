import { Suspense } from "react";
import { useLoaderData, Await, useNavigate, useLocation } from "react-router-dom";
import MovieDetails from "./MovieDetails";

const MovieDetailsWithLoading = () => {
  const data = useLoaderData();
  const navigate = useNavigate();
  const location = useLocation();

  return <>
    <button onClick={() => {
      const navigationRoute = location.search ? `../${location.search}` : '..';
      navigate(navigationRoute, { relative: 'path' });
    }}>Back To Search</button>
    <Suspense fallback={<p>Loading...</p>}>
      <Await resolve={data.movie} errorElement={<p>Oops</p>}>
        {(movie) => <MovieDetails movie={movie} />}
      </Await>
    </Suspense>
  </>
}

export default MovieDetailsWithLoading;
