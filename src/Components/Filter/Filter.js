import { useState } from "react";
import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/Phonebook/phonebook-actions";
// import styles from "./Filter.module.css";

export default function Filter() {
  const dispatch = useDispatch();
  const [filter, setFilter] = useState("");

  const onFilterChange = (e) => {
    setFilter(e.target.value);
    dispatch(changeFilter(e.target.value));
  };

  // const { box, input } = styles;
  return (
    // <form className="p-4 p-md-5 border rounded-3 bg-light" autoComplete="off">
    <div className="form-floating mb-3">
      <input
        type="text"
        name="filter"
        className="form-control"
        id="floatingFilterInput"
        value={filter}
        onChange={onFilterChange}
      />
      <label htmlFor="floatingFilterInput">Find contact by name:</label>
    </div>
    // </form>

    // <div className={box}>
    //   Find contacts by name:
    //   <input
    //     className={input}
    //     type="text"
    //     name="filter"
    //     value={filter}
    //     onChange={onFilterChange}
    //   />
    // </div>
  );
}
