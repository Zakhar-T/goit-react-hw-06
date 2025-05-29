import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'filters',
  initialState: {
    name: '',
  },
  reducers: {
    filter: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { filter } = slice.actions;

export default slice.reducer;
