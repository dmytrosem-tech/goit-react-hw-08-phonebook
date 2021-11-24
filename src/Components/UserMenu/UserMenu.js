import { useDispatch, useSelector } from "react-redux";
import { authSelectors, authOperations } from "../../redux/auth";
import defaultAvatar from "./Gubka_BobAvatar.jpg";

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);
  const avatar = defaultAvatar;

  return (
    <div className="userNav">
      <button
        className="btn btn-warning"
        type="button"
        onClick={() => dispatch(authOperations.logOut())}
      >
        quit
      </button>
    </div>
  );
}
