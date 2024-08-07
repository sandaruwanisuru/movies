import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
import Favourite from './Pages/favourite/Favourite';
import Movie from './Pages/movie/Movie';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/favourite',
    element: <Favourite />,
  },
  {
    path: '/movie:id',
    element: <Movie />,
  },
]);

const App = () => {
  return (
    <div className="container">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
