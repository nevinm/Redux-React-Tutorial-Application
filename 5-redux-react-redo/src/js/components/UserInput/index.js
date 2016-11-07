import React, {Component, PropTypes } from "react"
import { connect } from "react-redux"
import { fetchUser, postUser } from "../../actions/userActions"
import { fetchTweets } from "../../actions/tweetsActions"

const { func, object, array } = PropTypes;

@connect(state => {
  return {
    userData: state.users.usersData,
  }
}, { fetchUser, postUser })
export default class UserInput extends Component {

  static propTypes = {
    postUser: func,
    fetchUser: func,
  }

  state = {
    name: '',
    age: 0,
  }

  handleChange(event) {
    // TODO: Correct this function in the next commit.
    this.setState({name: event.target.value, age: event.target.value});
  }

  submitForm() {
    const { name, age, } = this.state;
    this.props.postUser({name, age})
  }

  render() {
    return (
      <div className='user-input-container'>
        <form>
          <input value={this.state.name} onChange={this.handleChange} placeholder='Type your name here!' type='text' />
          <br />
          <input value={this.state.age} placeholder='Type your age here!' type='number' />
          <br />
          <button type='submit' onClick={this.submitForm}>Add</button>
        </form>
      </div>
    );
  }
}
