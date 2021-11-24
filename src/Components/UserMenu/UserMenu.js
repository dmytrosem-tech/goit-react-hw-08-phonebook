import { useDispatch, useSelector } from "react-redux";
import { authSelectors, authOperations } from "../../redux/auth";
import defaultAvatar from "./Gubka_BobAvatar.jpg";

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);
  const avatar = defaultAvatar;

  return (
    <div className="dropdown text-end">
      <a
        href="#"
        className="d-block link-dark text-decoration-none dropdown-toggle show"
        id="dropdownUser1"
        data-bs-toggle="dropdown"
        aria-expanded="true"
      >
        <img src={avatar} alt="avatar" width="32" className="user__avatar" />
        {/* <span className="user__txt"> Welcome, {name}</span> */}
      </a>
      <ul className="dropdown-menu text-small" aria-labelledby="dropdownUser1">
        <li>
          <a class="dropdown-item" href="#">
            Settings
          </a>
        </li>
        <li>
          <a class="dropdown-item" href="#">
            Profile
          </a>
        </li>
        <li>
          <button
            className="btn btn-warning"
            type="button"
            onClick={() => dispatch(authOperations.logOut())}
          >
            quit
          </button>
        </li>
      </ul>
    </div>
  );
}
