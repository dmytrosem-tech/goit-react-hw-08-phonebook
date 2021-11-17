import { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/Phonebook/phonebook-actions";
import { v4 as uuid } from "uuid";
import styles from "./ContactForm.module.css";
// import { connect } from "react-redux";

export default function ContactForm({ onSubmit2 }) {
  const contName = uuid();
  const contNumber = uuid();

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [active] = useState(false);
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
    // onSubmit(cont)
    dispatch(addContact(cont));
    resetForm();
  };

  const resetForm = () => {
    setName("");
    setNumber("");
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.form__label} htmlFor={contName}>
        Contacts name:
      </label>
      <input
        className={styles.form__input}
        type="text"
        id={contName}
        name="name"
        value={name}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
        onChange={handleChangeAllInputs}
        placeholder="Will Smith"
      />
      <label className={styles.form__label} htmlFor={contNumber}>
        Contacts number:
      </label>
      <input
        className={styles.form__input}
        type="tel"
        id={contNumber}
        name="number"
        value={number}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
        required
        onChange={handleChangeAllInputs}
        placeholder="(097) 222-33-222"
      />
      <button className={styles.form__btn} type="submit" disabled={active}>
        Add contact
      </button>
    </form>
  );
}

// const mapDispatchToProps = (dispatch) => ({
//   onSubmit2: (cont) => dispatch(addContact(cont)),
// });
// export default connect(null, mapDispatchToProps)(ContactForm);
