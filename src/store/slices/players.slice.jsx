import { createSlice } from '@reduxjs/toolkit';

export const playersSlice = createSlice({
    name: 'name1',
    initialState: 'algo',
    reducers: {
        // all actions
    }
})

export const { } = playersSlice.actions;

export default playersSlice.reducer;