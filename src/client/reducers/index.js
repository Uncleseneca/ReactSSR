import { combineReducers } from 'redux';
import users from './users';
import auth from './auth';
import admins from './admins';

const rootReducer = combineReducers({ users, auth, admins });

export default rootReducer;
