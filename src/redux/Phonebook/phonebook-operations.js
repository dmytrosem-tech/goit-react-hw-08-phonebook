import { createAsyncThunk } from "@reduxjs/toolkit";
import * as phoneBookAPI from "../../services/phonebook-api";

//---------------------------------------------asyncThunk----------------------------------------------//
export const fetchContact = createAsyncThunk(
  "contacts/fetchContactsGlobal",
  async () => {
    const contacts = await phoneBookAPI.fetchContactsAsync();
    return contacts;
  }
);

export const addContact = createAsyncThunk(
  "contacts/сontactsGlobal",
  async (cont) => {
    const contacts = await phoneBookAPI.addContactAsync(cont);
    return contacts;
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContactGlobal",
  async (id) => {
    await phoneBookAPI.deleteContactsAsync(id);
    return id;
  }
);
