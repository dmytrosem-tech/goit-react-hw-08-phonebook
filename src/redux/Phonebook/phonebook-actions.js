// import types from "./phonebook-types";
import { createAction } from "@reduxjs/toolkit";

export const addContact = createAction("contacts/Add");
export const deleteContact = createAction("contacts/Delete");
export const changeFilter = createAction("contacts/ChangeFilter");

// export const addContact = (cont) => ({
//   type: types.ADD,
//   payload: cont,
// });

// export const deleteContact = (contactId) => ({
//   type: types.DELETE,
//   payload: contactId,
// });
// export const changeFilter = (value) => ({
//   type: types.CHANGE_FILTER,
//   payload: value,
// });
