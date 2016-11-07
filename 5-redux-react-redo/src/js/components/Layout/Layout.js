import React, {Component, PropTypes } from "react"
import { connect } from "react-redux"

import { fetchUser } from "../../actions/userActions"
import { fetchTweets } from "../../actions/tweetsActions"
import UserInput from '../UserInput';

const { func, object, array } = PropTypes;

@connect(state => {
  return {
    tweetData: state.tweets.tweetData,
    usersData: state.users.usersData,
  }
}, {fetchTweets, fetchUser})
export default class Layout extends Component {

  static propTypes = {
    tweetData: object || array,
    fetchTweets: func,
    fetchUser: func,
  }

  state = {
    toRenderTweets: false,
  }

  componentWillMount() {
    this.props.fetchUser();
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

  renderUsers() {
    const { usersData } = this.props;

    return usersData && usersData.map(child => {
      const name = child.name ? (<li key={child.id}>{child.name} - {child.drink}</li>) : "";
      return name;
    });
  }

  render() {
    const { toRenderTweets } = this.state;
    return(
      <div className='parent-container'>
        <div className='tweet-container'>
          <button onClick={this.callForTweets}> Load them tweets! </button>
          {toRenderTweets ? <ul>{this.renderTweets()}</ul> : ""}
        </div>
        <div className='user-container'>
            <ul>
              <li>Name - Drink</li>
              {this.renderUsers()}
            </ul>
        </div>
        <br />
        <div className='user-input'>
          <UserInput />
        </div>
      </div>
    );
  }
}
