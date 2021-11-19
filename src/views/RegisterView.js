import { render } from "@testing-library/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { authOperations } from "../redux/auth";

export default function RegisterView() {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
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
    dispatch(authOperations.register({ name, mail, password }));
    setName("");
    setMail("");
    setPassword("");
  };

  render(
    <div>
      <h1>Registration page</h1>
      <form className="form" autoComplete="off" onSubmit={handleSubmit}>
        <label className="form__label">
          <input type="text" name="name" value={name} onChange={handleChange} />
        </label>

        <label className="form__label">
          mail
          <input
            type="text"
            name="email"
            value={mail}
            onChange={handleChange}
          />
        </label>

        <label className="form__label">
          password
          <input
            type="password"
            name={password}
            value="p"
            onChange={handleChange}
          />
        </label>

        <button type="submit">Go registration</button>
      </form>
    </div>
  );
}
