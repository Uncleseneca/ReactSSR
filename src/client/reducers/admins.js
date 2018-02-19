import { FETCH_ADMINS } from '../actions';

const admins = (state = [], action) => {
  switch (action.type) {
    case FETCH_ADMINS:
      return action.payload.data;
    default:
      return state;
  }
};

export default admins;
