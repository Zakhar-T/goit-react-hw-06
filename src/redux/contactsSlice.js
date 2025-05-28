import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
  },
  reducers: {
    add: (state, action) => {
      state.items.push(action.payload);
    },
    remove: (state, action) => {
      state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const { add, remove } = slice.actions;

export default slice.reducer;
