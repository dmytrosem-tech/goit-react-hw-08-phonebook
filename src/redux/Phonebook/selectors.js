const getContacts = (state) => state.contacts.contactsList;
const getFilter = (state) => state.contacts.contactsFilter;
const getLoading = (state) => state.contacts.loading;

const contactsSelectors = {
  getContacts,
  getFilter,
  getLoading,
};

export default contactsSelectors;
