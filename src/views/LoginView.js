import { useState } from "react";
import { useDispatch } from "react-redux";
import { authOperations } from "../redux/auth";

export default function LoginView() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "email":
        return setEmail(value);
      case "password":
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    setEmail("");
    setPassword("");
  };

  return (
    <div className="container col-xl-10 col-xxl-8 px-4 py-5">
      <div className="row align-items-center g-lg-5 py-5">
        <div className="col-lg-7 text-center text-lg-start">
          <h1 className="display-4 fw-bold lh-1 mb-3">Login please</h1>
          <p className="col-lg-10 fs-4">
            Сheck email and password before login.{" "}
          </p>
        </div>
        <div className="col-md-10 mx-auto col-lg-5">
          <form
            className="p-4 p-md-5 border rounded-3 bg-light"
            autoComplete="off"
            onSubmit={handleSubmit}
          >
            <div className="form-floating mb-3">
              <input
                type="email"
                name="email"
                className="form-control"
                id="floatingInput"
                value={email}
                onChange={handleChange}
                placeholder="name@example.com"
              />
              <label for="floatingInput">Email address</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="password"
                name="password"
                className="form-control"
                id="floatingPassword"
                value={email}
                onChange={handleChange}
                placeholder="Password"
              />
              <label for="floatingPassword">Password</label>
            </div>
            <div className="checkbox mb-3">
              {/* <label>
              <input type="checkbox" value="remember-me"/> Remember me
            </label> */}
            </div>
            <button className="w-100 btn btn-lg btn-primary" type="submit">
              Login
            </button>
            <hr className="my-4" />
            <small className="text-muted">
              By clicking Sign up, you agree to the terms of use.
            </small>
          </form>
        </div>
      </div>
    </div>
    // <div className="loginPage">
    //   <h1 className="loginPage__title">Login Page</h1>

    //   <form className="form" autoComplete="off" onSubmit={handleSubmit}>
    //     <label className="form__label">
    //       Mail
    //       <input
    //         className="form__input"
    //         type="email"
    //         name="email"
    //         value={email}
    //         onChange={handleChange}
    //       />
    //     </label>

    //     <label className="form__label">
    //       Password
    //       <input
    //         className="form__input"
    //         type="password"
    //         name="password"
    //         value={password}
    //         onChange={handleChange}
    //       />
    //     </label>

    //     <button type="submit">Log In</button>
    //   </form>
    // </div>
  );
}
