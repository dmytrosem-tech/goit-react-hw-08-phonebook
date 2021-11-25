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
    <div className="container col-xl-10 col-xxl-8 px-4 py-5">
      <div className="row align-items-start g-lg-5 py-5">
        <h1 className="display-4 fw-bold lh-1 mb-3">Phonebook</h1>
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
    // <div className="container">
    //   <h1>Phonebook</h1>
    //   <ContactForm />
    //   <h2>Contacts</h2>
    //   <Filter />
    //   <ContactList />
    // </div>
  );
}

{
  /* <form className="p-4 p-md-5 border rounded-3 bg-light">
  <div className="form-floating mb-3">
    <input
      type="email"
      className="form-control"
      id="floatingInput"
      placeholder="name@example.com"
    />
    <label for="floatingInput">Email address</label>
  </div>
  <div className="form-floating mb-3">
    <input
      type="password"
      className="form-control"
      id="floatingPassword"
      placeholder="Password"
    />
    <label for="floatingPassword">Password</label>
  </div>
  <div className="checkbox mb-3">
    <label>
      <input type="checkbox" value="remember-me" /> Remember me
    </label>
  </div>
  <button className="w-100 btn btn-lg btn-primary" type="submit">
    Sign up
  </button>
  <hr className="my-4" />
  <small className="text-muted">
    By clicking Sign up, you agree to the terms of use.
  </small>
</form>; */
}
