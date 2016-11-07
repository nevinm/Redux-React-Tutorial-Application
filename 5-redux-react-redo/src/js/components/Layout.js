import React from "react"
import { connect } from "react-redux"

// import { fetchUser } from "../actions/userActions"
import { fetchTweets } from "../actions/tweetsActions"

@connect(state => {
  return {
    user: state.user,
  }
}, {})
export default class Layout extends React.Component {

  render() {
    return(<div>CHECKMATE</div>);
  }
}
