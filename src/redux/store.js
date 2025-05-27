import { configureStore } from '@reduxjs/toolkit';

const initialState = {
  contacts: {
    items: [],
  },
  filters: {
    name: '',
  },
};

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filtersReducer,
  },
});
