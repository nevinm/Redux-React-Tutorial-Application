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

export function postUser(params) {
  return new Promise((resolve, reject) =>
    (dispatch) => {
      axios.post(`http://rest.learncode.academy/api/learncode/friends`, {
        name: params.name,
        age: params.age,
      })
      .then((response) => {
        dispatch({ type: 'FETCH_FRIENDS_FULFILLED', payload: response.data });
        return resolve();
      })
      .catch((err) => {
        dispatch({ type: 'FETCH_FRIENDS_REJECTED', payload: err });
        return reject();
      });
    });
}
