import Home from './pages/Home';
import UsersList from './pages/UsersList';

const Routes = [
  {
    ...Home,
    path: '/',
    exact: true,
  },
  {
    ...UsersList,
    path: '/users',
  },
];

export default Routes;
