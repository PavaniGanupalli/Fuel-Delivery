import "./index.css";
import { Component } from "react";
import { Link, Navigate } from "react-router-dom";
// import { BiFemaleSign } from "react-icons/bi";

class Login extends Component {
  state = { email: "", password: "", err: "", status: false };

  onEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };

  onPasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };

  onLogin = () => {
    const { email, password } = this.state;
    if (email === "pavani@gmail.com" && password === "pavani@iiit") {
      this.setState({ status: true });
    } else if (email === "susmitha@gmail.com" && password === "susmitha@iiit") {
      this.setState({ status: true });
    } else {
      this.setState({ err: "Invalid email or password" });
    }
  };

  render() {
    const { email, password, err, status } = this.state;
    if (status === true) {
      return <Navigate to="/order"  />;
    } else {
      return (
        <section>
          <div className="form-box">
            <div className="form-value">
              <form onSubmit={this.onLogin}>
                <h2>Login</h2>
                <div className="inputbox">
                  <ion-icon name="mail-outline"></ion-icon>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={this.onEmailChange}
                  />
                  <label>Email</label>
                </div>
                <div className="inputbox">
                  <ion-icon name="lock-closed-outline"></ion-icon>
                  <input
                    type="password"
                    value={password}
                    required
                    onChange={this.onPasswordChange}
                  />
                  <label>Password</label>
                </div>

                <button type="submit" onClick={this.onLogin}>
                  Log in
                </button>
                <p>{err}</p>
                <div className="register">
                  <p>
                    Don't have a account <Link to="/register">Register</Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
          <img
            src="https://png.pngtree.com/png-clipart/20220131/original/pngtree-big-isolated-motorcycle-vector-colorful-icons-flat-illustrations-of-delivery-by-png-image_7255152.png"
            alt="logoin fuel"
            className="login-page-image"
          />
        </section>
      );
    }
  }
}
export default Login;
