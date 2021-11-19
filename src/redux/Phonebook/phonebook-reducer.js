import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import { changeFilter } from "./phonebook-actions";
import contactsOperations from "./phonebook-operations";

const contactsList = createReducer([], {
  [contactsOperations.fetchContact.fulfilled]: (_, { payload }) => payload,
  [contactsOperations.addContact.fulfilled]: (state, { payload }) => [
    ...state,
    payload,
  ],
  [contactsOperations.deleteContact.fulfilled]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const loading = createReducer(false, {
  [contactsOperations.fetchContact.pending]: () => true,
  [contactsOperations.fetchContact.fulfilled]: () => false,
  [contactsOperations.fetchContact.rejected]: () => false,
  [contactsOperations.addContact.pending]: () => true,
  [contactsOperations.addContact.fulfilled]: () => false,
  [contactsOperations.addContact.rejected]: () => false,
  [contactsOperations.deleteContact.pending]: () => true,
  [contactsOperations.deleteContact.fulfilled]: () => false,
  [contactsOperations.deleteContact.rejected]: () => false,
});

const contactsFilter = createReducer("", {
  [changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  contactsFilter,
  loading,
  contactsList,
});
