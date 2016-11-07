var initialState = {
  tweets: [],
};

export default function reducer(state=initialState, action) {
  switch (action.type) {
    case "FETCH_TWEETS_FULFILLED":
      console.log(action);
    default:
      return state;
  }
}
