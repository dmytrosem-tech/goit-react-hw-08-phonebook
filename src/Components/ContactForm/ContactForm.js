import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { contactsSelectors } from "../../redux/Phonebook";
import { contactsOperations } from "../../redux/Phonebook";
import { v4 as uuid } from "uuid";
// import styles from "./ContactForm.module.css";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  // const [active] = useState(false);
  const contacts = useSelector(contactsSelectors.getContacts);
  const dispatch = useDispatch();

  const handleChangeAllInputs = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "number":
        setNumber(value);
        break;
      default:
        console.warn(`Field - ${name} is under constraction`);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const cont = {
      name: name,
      number: number,
      id: uuid(),
    };
    if (contacts.some(({ name }) => name === cont.name)) {
      return alert(`Sorry, contact is already in contacts list`);
    }
    dispatch(contactsOperations.addContact(cont));
    // dispatch(addContact({name, phone}))
    resetForm();
  };

  const resetForm = () => {
    setName("");
    setNumber("");
  };

  return (
    <form
      className="p-4 p-md-5 border rounded-3 bg-light"
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <div className="form-floating mb-3">
        <input
          type="text"
          name="name"
          className="form-control"
          id="floatingNameInput"
          value={name}
          onChange={handleChangeAllInputs}
          placeholder="Will Smith"
        />
        <label htmlFor="floatingNameInput">Contact name:</label>
      </div>
      <div className="form-floating mb-3">
        <input
          type="tel"
          name="number"
          className="form-control"
          id="floatingPasswordInput"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          onChange={handleChangeAllInputs}
          placeholder="(097)222-33-22"
        />
        <label htmlFor="floatingPasswordInput">Contact number:</label>
      </div>
      <div className="checkbox mb-3"></div>
      <button
        className="w-100 btn btn-lg btn-primary d-flex align-items-center justify-content-center"
        type="submit"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          fill="currentColor"
          className="bi bi-person-plus mx-3"
          viewBox="0 0 16 16"
        >
          <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
          <path
            fillRule="evenodd"
            d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"
          />
        </svg>
        Add contact
      </button>
      <hr className="my-4" />
      <small className="text-muted">
        check the correctness of the entered data*
      </small>
    </form>
  );
}
