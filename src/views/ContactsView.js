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
    <div className="container col-xl-10 col-xxl-8 px-4  py-5">
      <div className="row align-items-start g-lg-5 py-5">
        <h1 className="display-4 fw-bold lh-1 mb-3">Phonebook </h1>
        <div className="col-md-10 mx-auto my-3 col-lg-5">
          <ContactForm />
        </div>
        <div className="col-lg-7 text-center text-lg- my-3">
          <h2>Contacts</h2>
          <Filter />
          <ContactList />
        </div>
      </div>
    </div>
  );
}
