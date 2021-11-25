import React from "react";
import ContactItem from "../ContactItem";
import styles from "./ContactList.module.css";
import { useSelector } from "react-redux";
import { contactsSelectors } from "../../redux/Phonebook";

export default function ContactList() {
  const contacts = useSelector(contactsSelectors.getContacts);
  const filter = useSelector(contactsSelectors.getFilter);

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
      {getFilteredContacts().map(({ name, number, id }) => (
        <ContactItem key={id} name={name} number={number} id={id} />
      ))}
    </div>
    // <ul className={styles.contacts__list}>
    //   {getFilteredContacts().map(({ name, number, id }) => (
    //     <ContactItem key={id} name={name} number={number} id={id} />
    //   ))}
    // </ul>
  );
}
