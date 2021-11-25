import { useDispatch, useSelector } from "react-redux";
import { authSelectors, authOperations } from "../../redux/auth";
import defaultAvatar from "./Gubka_BobAvatar.jpg";

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);
  const avatar = defaultAvatar;

  return (
    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
      <img src={defaultAvatar} className="p-3" width="90" alt="bob" />
      <span className="p-3" style={{ fontSize: 15 }}>
        Welcome, {name}!
      </span>
      <button
        className="btn btn-warning p-1"
        style={{ width: 90, height: 35 }}
        type="button"
        onClick={() => dispatch(authOperations.logOut())}
      >
        Sign out
      </button>
    </div>
  );
}
