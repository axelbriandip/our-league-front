import { createSlice } from '@reduxjs/toolkit';

import axios from 'axios';

export const playersSlice = createSlice({
    name: 'name1',
    initialState: [],
    reducers: {
        setPlayers: (state, action) => {
            return action.payload
        }
    }
})

const urlAllPokemons = 'https://pokeapi.co/api/v2/pokemon';
const urlSelf = 'https://our-league2.onrender.com/api/v1/players';

export const getPlayersThunk = () => (dispatch) => {
    return axios.get(urlSelf)
        .then(res => dispatch(setPlayers(res.data.data.players)))
}

export const { setPlayers } = playersSlice.actions;

export default playersSlice.reducer;