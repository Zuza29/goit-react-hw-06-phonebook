import { createAction } from "@reduxjs/toolkit";
const addContacts = createAction("contact/addContacts");
const deleteContacts = createAction("contact/deleteContacts");
const filterContacts = createAction("contact/filterContact");
export { addContacts, deleteContacts, filterContacts };