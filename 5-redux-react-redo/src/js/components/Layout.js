import React, {Component, PropTypes } from "react"
import { connect } from "react-redux"

// import { fetchUser } from "../actions/userActions"
import { fetchTweets } from "../actions/tweetsActions"

const { func, object, array } = PropTypes;

@connect(state => {
  return {
    tweetData: state.tweets.tweetData,
  }
}, {fetchTweets})
export default class Layout extends Component {

  static propTypes = {
    tweetData: object || array,
    fetchTweets: func,
  }

  componentWillMount() {
    const { fetchTweets } = this.props;
    fetchTweets();
  }

  renderTweets() {
    const { tweetData } = this.props;
    return tweetData.map(child => {
        return(<div key={child.id}>{child.text}</div>);
    });
  }

  render() {
    return(<div>{this.renderTweets()}</div>);
  }
}
