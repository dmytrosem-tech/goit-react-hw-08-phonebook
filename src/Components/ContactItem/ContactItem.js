import { useDispatch } from "react-redux";
import { contactsOperations } from "../../redux/Phonebook";
import PropTypes from "prop-types";
import styles from "./ContactItem.module.css";
// import { connect } from "react-redux";

export default function ContactItem({ name, number, id }) {
  const dispatch = useDispatch();
  const { contacts__item, contact__name, contact__number, contacts__btn } =
    styles;
  return (
    <div className="col">
      <div className="card shadow-sm">
        <svg
          className="bd-placeholder-img card-img-top"
          width="100%"
          height="225"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Placeholder: Thumbnail"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
        >
          <title>Placeholder</title>
          <rect width="100%" height="100%" fill="#f0f0f0"></rect>
          <text x="28%" y="50%" fill="#787878" dy=".3em">
            set photo here
          </text>
        </svg>

        <div className="card-body">
          <p className="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary"
              >
                View
              </button>
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary"
              >
                Edit
              </button>
            </div>
            <small className="text-muted">9 mins</small>
          </div>
        </div>
      </div>
    </div>
    // <li id={id} className={contacts__item}>
    //   <p className={contact__name}>{name}</p>
    //   <p className={contact__number}>tel: {number}</p>
    //   <button
    //     onClick={() => dispatch(contactsOperations.deleteContact(id))}
    //     className={contacts__btn}
    //   >
    //     Delete contact
    //   </button>
    // </li>
  );
}

ContactItem.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  id: PropTypes.string,
};

// const mapDispatchToProps = (dispatch) => ({
//   deleteContact: (id) => dispatch(deleteContact(id)),
// });

// export default connect(null, mapDispatchToProps)(ContactItem);
