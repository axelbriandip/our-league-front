import { configureStore } from '@reduxjs/toolkit'
import playersSlice from './slices/players.slice'
import teamsSlice from './slices/teams.slice'

export default configureStore({
    reducer: {
        playersSlice: playersSlice,
        teamsSlice: teamsSlice
    }
})