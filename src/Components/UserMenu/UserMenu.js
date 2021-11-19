import { useDispatch, useSelector } from "react-redux";
import { authSelectors, authOperations } from "../../redux/auth";
import defaultAvatar from "./Gubka_BobAvatar.jpg";

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);
  const avatar = defaultAvatar;

  return (
    <div className="user">
      <img src={avatar} alt="avatar" width="32" className="user__avatar" />
      <span className="user__txt"> Welcome, {name}</span>
      <button type="button" onClick={() => dispatch(authOperations.logOut())}>
        quit
      </button>
    </div>
  );
}
