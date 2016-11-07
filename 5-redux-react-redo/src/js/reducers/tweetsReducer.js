const FETCH_TWEETS_FULFILLED = 'FETCH_TWEETS_FULFILLED';

var initialState = {
  tweetData: [],
};

export default function reducer(state=initialState, action) {
  switch (action.type) {
    case FETCH_TWEETS_FULFILLED:
      return {
        ...state.tweets,
        tweetData: action.payload,
      };

    default:
      return state;
  }
}
