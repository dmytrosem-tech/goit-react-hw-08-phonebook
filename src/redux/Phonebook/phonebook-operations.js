import { createAsyncThunk } from "@reduxjs/toolkit";
import * as actualAPI from "../../services/api-store";

//---------------------------------------------asyncThunk----------------------------------------------//
const fetchContact = createAsyncThunk(
  "contacts/fetchContactsGlobal",
  async () => {
    const contacts = await actualAPI.fetchContactsAsync();
    return contacts;
  }
);

const addContact = createAsyncThunk("contacts/сontactsGlobal", async (cont) => {
  const contacts = await actualAPI.addContactAsync(cont);
  return contacts;
});

const deleteContact = createAsyncThunk(
  "contacts/deleteContactGlobal",
  async (id) => {
    await actualAPI.deleteContactsAsync(id);
    return id;
  }
);

const contactsOperations = {
  deleteContact,
  fetchContact,
  addContact,
};

export default contactsOperations;
