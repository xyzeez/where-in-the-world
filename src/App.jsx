import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';

// Components
import AppLayout from './ui/AppLayout';

// Pages
import Home from './pages/Home';
import Countries from './pages/Countries';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Navigate replace to="home" />,
      },
      {
        path: 'home',
        element: <Home />,
      },
      {
        path: 'countries',
        element: <Navigate replace to="home" />,
      },
      {
        path: 'countries/:name',
        element: <Countries />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
