import axios from "axios";
import { Component } from "react";
import { Link } from "react-router-dom";
import { baseUrl } from "../../Shared/baseUrl";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleInputChange = (event) => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = () => {
    const data = {
      username: this.state.username,
      password: this.state.password,
      confirmPassword: this.state.confirmPassword,
      role: "USER",
    };
    if (this.state.password === this.state.confirmPassword) {
      axios.post(baseUrl + "/register", data);
    } else {
      alert("Password and Confirm Password must match!!!");
    }
  };

  render() {
    return (
      <div className="form">
        <h1>Create Account</h1>
        <label className="sr-only">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          className="form-control"
          placeholder="Username"
          v-model="user.username"
          onChange={this.handleInputChange}
          required
        />
        <label className="sr-only">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          className="form-control"
          placeholder="Password"
          v-model="user.password"
          onChange={this.handleInputChange}
          required
        />
        <input
          type="password"
          id="password-confirm"
          name="confirmPassword"
          className="form-control"
          placeholder="Confirm Password"
          v-model="user.password"
          onChange={this.handleInputChange}
          required
        />

        <button className="btn" type="submit" onClick={this.handleSubmit}>
          Sign in
        </button>
        <br />
        <Link to="/login">Have an account?</Link>
      </div>
    );
  }
}

export default Register;
