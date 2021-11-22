import axios from "axios";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

export async function regUserAsync(o) {
  const { data } = await axios.post("users/signup", o);
  return data;
}

export async function logInUserAsync() {
  const { data } = await axios.post("users/login");
  return data;
}

export async function fetchContactsAsync() {
  const { data } = await axios.get("/contacts");
  return data;
}

export async function addContactAsync(o) {
  const { data } = await axios.post("/contacts", o);
  return data;
}
export async function deleteContactsAsync(id) {
  const { data } = await axios.delete(`/contacts/${id}`);
  return data;
}
