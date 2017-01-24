import { combineReducers }  from 'redux';
import tweetsReducer from './tweetsReducer';
import usersReducer from './usersReducer';

export default combineReducers({
  tweets: tweetsReducer,
  users: usersReducer,
});
