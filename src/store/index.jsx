import { configureStore } from '@reduxjs/toolkit'
import playersSlice from './slices/players.slice'

export default configureStore({
    reducer: {
        playersSlice: playersSlice
    }
})