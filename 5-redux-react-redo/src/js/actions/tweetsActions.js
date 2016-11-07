import { axios } from "axios";

export function fetchTweets() {
  return () => {
    axios.get("http://rest.learncode.academy/api/test123/tweets")
    .then((response) => {
      dispatch({type: "FETCH_TWEETS_FULFILLED", payload: response.data })
    })
    .catch((response) => {
      dispatch({type: "FETCH_TWEETS_REJECTED", payload: response.data})
    })
  }
}
