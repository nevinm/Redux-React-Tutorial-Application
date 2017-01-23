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

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

  submitForm() {
    const { name, age, } = this.state;
    this.props.postUser({name, age})
  }

  render() {
    return (
      <form onSubmit={this.submitForm}>
        <div className="form-group">
          <label for="name-input">Email address</label>
          <input
            value={this.state.name}
            onChange={this.handleChange}
            name='name'
            id='name-input'
            type="text"
            className="form-control"
            placeholder='Enter your name'
          />
          <small className="form-text text-muted">We'll never share your name with anyone else.</small>
        </div>
        <div className="form-group">
          <label for="age-input">Age</label>
          <input
            value={this.state.age}
            onChange={this.handleChange}
            type="number"
            className="form-control"
            name='age'
            id="age-input"
            placeholder="Age"
           />
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    );
  }
}
