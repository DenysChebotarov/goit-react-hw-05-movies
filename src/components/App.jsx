import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
// import Home from './Home/Home';
// import Movies from './Movies/Movies';
// import MovieDetails from './MovieDetails/MovieDetails';

// import { Reviews } from './Reviews/Reviews';
// import { Cast } from './Cast/Cast';

const Home = lazy(() => import("./Home/Home"));
const Movies = lazy(() => import("./Movies/Movies"));
const MovieDetails = lazy(() => import("./MovieDetails/MovieDetails"));
const Reviews = lazy(() => import("./Reviews/Reviews"));
const Cast = lazy(() => import("./Cast/Cast"));


export const App = () => {
  return (
      <Routes>
        <Route path = '/' element = {<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path='cast' element={<Cast />}/>
            <Route path='reviews' element={<Reviews />}/>
          </Route>
        </Route>
      </Routes>
  );
};
