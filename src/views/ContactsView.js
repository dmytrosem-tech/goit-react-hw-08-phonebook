import ContactForm from "../Components/ContactForm";
import Filter from "../Components/Filter";
import ContactList from "../Components/ContactList";

export default function ContactsView() {
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
