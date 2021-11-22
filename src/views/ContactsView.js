import { useDispatch } from "react-redux";
import { useEffect } from "react";
import ContactForm from "../Components/ContactForm";
import Filter from "../Components/Filter";
import ContactList from "../Components/ContactList";
import { contactsOperations } from "../redux/Phonebook";

export default function ContactsView() {
  const dispatch = useDispatch();
  useEffect(() => dispatch(contactsOperations.fetchContact()), [dispatch]);
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}
