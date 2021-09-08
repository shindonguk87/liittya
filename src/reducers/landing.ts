import { createSlice } from '@reduxjs/toolkit';

const name = '@Landing';
const initialState = {
  loading: false,
};

const slice = createSlice({
  name,
  initialState,
  reducers: {},
  extraReducers: {},
});

export default slice.reducer;
