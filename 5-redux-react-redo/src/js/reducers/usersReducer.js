const FETCH_FRIENDS_FULFILLED = 'FETCH_FRIENDS_FULFILLED';

var initialState = {
  users: [],
};

export default function reducer(state=initialState, action) {
  switch (action.type) {
    case FETCH_FRIENDS_FULFILLED:
      return {
        ...state.users,
        usersData: action.payload,
      };

    default:
      return state;
  }
}
