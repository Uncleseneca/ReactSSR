import Home from './components/Home';
import UsersList, { loadData } from './components/UsersList';

const Routes = [
  {
    path: '/',
    component: Home,
    exact: true,
  },
  {
    loadData,
    path: '/users',
    component: UsersList,
  },
];

export default Routes;
