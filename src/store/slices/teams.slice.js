import { createSlice } from '@reduxjs/toolkit';

import axios from 'axios';

export const teamsSlice = createSlice({
    name: 'teams',
    initialState: [],
    reducers: {
        setTeams: (state, action) => {
            return action.payload
        }
    }
})

export const getTeamsThunk = () => (dispatch) => {
    return axios.get('https://our-league2.onrender.com/api/v1/teams')
        .then(res => dispatch(setTeams(res.data.data.teams)))
}

export const { setTeams } = teamsSlice.actions;

export default teamsSlice.reducer;