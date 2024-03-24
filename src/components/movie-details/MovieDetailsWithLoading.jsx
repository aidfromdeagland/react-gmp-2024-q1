import { Suspense } from "react";
import { useLoaderData, Await } from "react-router-dom";
import MovieDetails from "./MovieDetails";

const MovieDetailsWithLoading = () => {
  const data = useLoaderData();

  return <Suspense fallback={<p>Loading...</p>}>
    <Await resolve={data.movie} errorElement={<p>Oops</p>}>
      {(movie) => <MovieDetails movie={movie} />}
    </Await>
  </Suspense>
}

export default MovieDetailsWithLoading;
