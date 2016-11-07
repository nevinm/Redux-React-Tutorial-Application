import React, {Component, PropTypes } from "react"
import { connect } from "react-redux"

// import { fetchUser } from "../actions/userActions"
import { fetchTweets } from "../actions/tweetsActions"

const { func, object } = PropTypes;

@connect(state => {
  return {
    user: state.user,
  }
}, {fetchTweets})
export default class Layout extends Component {

  static propTypes = {
    user: object,
    fetchTweets: func,
  }

  componentWillMount() {
    this.props.fetchTweets();
  }

  render() {
    return(<div>CHECKMATE</div>);
  }
}
