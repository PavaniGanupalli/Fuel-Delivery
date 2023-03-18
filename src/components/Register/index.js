import "./index.css";
import { Component } from "react";
import { Link } from "react-router-dom";

class Register extends Component {
  render() {
    return (
      <section>
        <div className="register-box">
          <div className="form-value">
            <form>
              <h2>Register</h2>
              <div className="inputbox">
                <ion-icon name="mail-outline"></ion-icon>
                <input type="email" required />
                <label>First Name</label>
              </div>
              <div className="inputbox">
                <ion-icon name="mail-outline"></ion-icon>
                <input type="email" required />
                <label>Last Name</label>
              </div>
              <div className="inputbox">
                <ion-icon name="mail-outline"></ion-icon>
                <input type="email" required />
                <label>Email</label>
              </div>
              <div className="inputbox">
                <ion-icon name="mail-outline"></ion-icon>
                <input type="email" required />
                <label>Phone Number</label>
              </div>
              <div className="inputbox">
                <ion-icon name="mail-outline"></ion-icon>
                <input type="email" required />
                <label>Password</label>
              </div>
              <div className="inputbox">
                <ion-icon name="mail-outline"></ion-icon>
                <input type="email" required />
                <label>Country</label>
              </div>
              <div className="inputbox">
                <ion-icon name="mail-outline"></ion-icon>
                <input type="email" required />
                <label>State</label>
              </div>
              <div className="inputbox">
                <ion-icon name="mail-outline"></ion-icon>
                <input type="email" required />
                <label>District</label>
              </div>

              <div className="inputbox">
                <ion-icon name="lock-closed-outline"></ion-icon>
                <input type="password" required />
                <label>City/Town</label>
              </div>

              <button className="button-form">Register</button>
              <div className="register">
                <p>
                  Already have a account ?<Link to="/login">Login</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
        <img
          src="https://png.pngtree.com/png-clipart/20220131/original/pngtree-big-isolated-motorcycle-vector-colorful-icons-flat-illustrations-of-delivery-by-png-image_7255152.png"
          alt="login fuel"
          className="login-page-image"
        />
      </section>
    );
  }
}

export default Register;
