import { useState } from "react";
import { useDispatch } from "react-redux";
import { authOperations } from "../redux/auth";

export default function RegisterView() {
  const [name, setName] = useState("");
  const [email, setMail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "name":
        return setName(value);
      case "email":
        return setMail(value);
      case "password":
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(authOperations.register({ name, email, password }));
    setName("");
    setMail("");
    setPassword("");
  };

  return (
    <div className="container col-xl-10 col-xxl-8 px-4 py-5">
      <div className="row align-items-center g-lg-5 py-5">
        <div className="col-lg-7 text-center text-lg-start">
          <h1 className="display-4 fw-bold lh-1 mb-3">Sign up please.</h1>
          <p className="col-lg-10 fs-4">
            If you want to use all the features of our application, you must
            register. Thanks and enjoy.
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
                type="text"
                className="form-control"
                id="floatingName"
                name="name"
                value={name}
                onChange={handleChange}
                placeholder="John Cena"
              />
              <label for="floatingName">Name</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                id="floatingInput"
                name="email"
                value={email}
                onChange={handleChange}
                placeholder="johny@example.com"
              />
              <label for="floatingInput">Email address</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="password"
                className="form-control"
                id="floatingPassword"
                name="password"
                value={password}
                onChange={handleChange}
                placeholder="Password"
              />
              <label for="floatingPassword">Password</label>
            </div>
            <button className="w-100 btn btn-lg btn-primary" type="submit">
              Sign up
            </button>
            <hr className="my-4" />
            <small className="text-muted">
              By clicking Sign up, you agree to the terms of use.
            </small>
          </form>
        </div>
      </div>
    </div>
  );
}
