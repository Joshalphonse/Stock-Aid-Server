import React from "react";
import { withRouter } from "react-router-dom";

class Login extends React.Component {
  state = {
    username: "",
    password: ""
  };

  //
  handleChange = e => {
    this.setState({
      [e.target.placeholder]: e.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.history.push("/home");
  };
  render() {
    return (
      <div className="login-page">
        <div className="form2">
          <form className="login-container" onSubmit={this.handleSubmit}>
            <input
              type="text"
              value={this.state.username}
              onChange={this.handleChange}
              placeholder="username"
              name="username"
            />
            <input
              type="text"
              value={this.state.password}
              onChange={this.handleChange}
              placeholder="password"
              name="password"
            />
            <input type="submit" value="Log In" />
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
