import { Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import Movies from './Movies/Movies';
import MovieDetails from './MovieDetails/MovieDetails';
import { Layout } from './Layout';
import { Reviews } from './Reviews/Reviews';
import { Cast } from './Cast/Cast';

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
