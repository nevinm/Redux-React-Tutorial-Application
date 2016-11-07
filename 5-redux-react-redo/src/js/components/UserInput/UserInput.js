import React, {Component, PropTypes } from "react"
import { connect } from "react-redux"

import { fetchUser } from "../../actions/userActions"
import { fetchTweets } from "../../actions/tweetsActions"

const { func, object, array } = PropTypes;

@connect(state => {
  return {
    userData: state.users.usersData,
  }
}, { fetchUser })
export default class UserInput extends Component {

  render() {
    return (
      <div className='user-input-container'>
        <form>
          <input type='text' />
          <button type='submit' />
        </form>
      </div>
    );
  }
}
