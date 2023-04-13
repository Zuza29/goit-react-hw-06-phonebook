import { createReducer } from "@reduxjs/toolkit";
import { filterContacts } from "./actions";
const initialState = '';
export const filterReducer = createReducer(initialState, {
    [filterContacts]: (state, action) => (state = action.payload),
});

export default filterReducer;