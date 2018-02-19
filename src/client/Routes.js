import App from './App';
import Home from './pages/Home';
import UsersList from './pages/UsersList';
import AdminsList from './pages/AdminsList';
import NotFound from './pages/NotFound';

const Routes = [
  {
    ...App,
    routes: [
      {
        ...Home,
        path: '/',
        exact: true,
      },
      {
        ...UsersList,
        path: '/users',
      },
      {
        ...UsersList,
        path: '/users',
      },
      {
        ...AdminsList,
        path: '/admins',
      },
      {
        ...NotFound,
      },
    ],
  },
];

export default Routes;
