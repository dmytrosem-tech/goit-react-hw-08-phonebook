import { render } from "@testing-library/react";
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
    <div>
      <h1>Registration page</h1>
      <form className="form" autoComplete="off" onSubmit={handleSubmit}>
        <label className="form__label">
          name
          <input type="text" name="name" value={name} onChange={handleChange} />
        </label>

        <label className="form__label">
          email
          <input
            type="text"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>

        <label className="form__label">
          password
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>

        <button type="submit">Go registration</button>
      </form>
    </div>
  );
}
