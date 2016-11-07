import axios from 'axios';

export function fetchUser() {
  return (dispatch) => {
    axios.get(`http://rest.learncode.academy/api/learncode/friends`)
    .then((response) => {
      dispatch({ type: 'FETCH_FRIENDS_FULFILLED', payload: response.data });
    })
    .catch((err) => {
      dispatch({ type: 'FETCH_FRIENDS_REJECTED', payload: err });
    });
  };
}
