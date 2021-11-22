import { useState } from "react";
import { useDispatch } from "react-redux";
import { authOperations } from "../redux/auth";

export default function LoginView() {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
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
    dispatch(authOperations.logIn({ mail, password }));
    setMail("");
    setPassword("");
  };

  return (
    <div className="loginPage">
      <h1 className="loginPage__title">Login Page</h1>

      <form className="form" autoComplete="off" onSubmit={handleSubmit}>
        <label className="form__label">
          Mail
          <input
            className="form__input"
            type="email"
            name="email"
            value={mail}
            onChange={handleChange}
          />
        </label>

        <label className="form__label">
          Password
          <input
            className="form__input"
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>

        <button type="submit">Log In</button>
      </form>
    </div>
  );
}
