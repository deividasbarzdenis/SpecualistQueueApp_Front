import {configureStore} from "@reduxjs/toolkit";
import user, {loadUserFromStorage, subscribeToUserChanges} from './slices/userSlice'
import { loadState, saveState } from '../utils/localStorage'


export const createStore = (initialState) => {
    const store = configureStore({
        reducer: {
            user
        },
        preloadedState: {user: loadUserFromStorage(), ...initialState}
    })
    subscribeToUserChanges(store);
    return store
}

export default createStore()
