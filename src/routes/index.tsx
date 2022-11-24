import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import MovieDetails from '../pages/Movies/details';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movies/:movieId/details" element={<MovieDetails />} />
    </Routes>
  );
};

export default Router;
