import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
  },
  reducers: {
    add: (state, action) => {},
    delete: (state, action) => {},
  },
});

export default slice.reducer;
