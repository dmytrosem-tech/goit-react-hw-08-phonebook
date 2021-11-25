import React from "react";
import ContactItem from "../ContactItem";
import { useSelector } from "react-redux";
import { contactsSelectors } from "../../redux/Phonebook";
// import styles from "./ContactList.module.css";

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
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
      {getFilteredContacts().map(({ name, number, id }) => (
        <ContactItem key={id} name={name} number={number} id={id} />
      ))}
    </div>
  );
}
