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
    <ul className={styles.contacts__list}>
      {getFilteredContacts().map(({ name, number, id }) => (
        <ContactItem key={id} name={name} number={number} id={id} />
      ))}
    </ul>
  );
}

// const mapStateToProps = (state) => ({
//   contacts: state.contactsList,
//   filter: state.contactsFilter,
// });

// export default connect(mapStateToProps, null)(ContactList);
