import React, {Component, PropTypes } from "react"
import { connect } from "react-redux"

// import { fetchUser } from "../actions/userActions"
import { fetchTweets } from "../../actions/tweetsActions"
// import styles from './Layout.css';

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

  state = {
    toRenderTweets: false,
  }

  callForTweets = () => {
    this.setState({toRenderTweets: true});
    this.props.fetchTweets();
  }

  renderTweets() {
    const { tweetData } = this.props;

    return tweetData.map(child => {
      const text = child.text ? (<li key={child.id}>{child.text}</li>) : "";
      return text;
    });
  }

  render() {
    const { toRenderTweets } = this.state;
    return(
      <div>
        <button onClick={this.callForTweets}> Load them tweets! </button>
        {toRenderTweets ? <ul>{this.renderTweets()}</ul> : ""}
      </div>
    );
  }
}
