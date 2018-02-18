import App from './App';
import Home from './pages/Home';
import UsersList from './pages/UsersList';

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
    ],
  },
];

export default Routes;
