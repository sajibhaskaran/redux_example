// libraries
import {combineReducers} from 'redux';

// reducers
import {UserReducer} from './reducer_users';
import ActiveUserReducer from './reducer_active_user';
//combine the reduces to one state object

const allReducers = combineReducers({

  users: UserReducer,
  selectUser: ActiveUserReducer
});

export default allReducers;
