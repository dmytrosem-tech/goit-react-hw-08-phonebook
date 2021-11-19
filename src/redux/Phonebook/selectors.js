const getContacts = (state) => state.phonebook.contacts;
const getFilter = (state) => state.phonebook.filter;
const getLoading = (state) => state.phonebook.loading;

const contactsSelectors = {
  getContacts,
  getFilter,
  getLoading,
};
