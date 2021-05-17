import {createSlice, createStore} from "@reduxjs/toolkit";
import {loadState, saveState} from "../../utils/localStorage";
import _ from "lodash";

const initialState = {
    userData: null,
    jwt: null
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    //pasirasome veiksmus ka norime daryti su slice, reducers ..po : gaunasi rename objekto
    reducers: {
        setUserData(state, {payload: user}) {
            state.userData = user
        },
        setJwt(state, {payload: jwt}) {
            state.jwt = jwt
        },
        removeUserData(state) {
            state.userData = null
        },
        removeJwt(state) {
            state.jwt = null
        },
    },
})
export const subscribeToUserChanges = (state) => {
    state.subscribe(_.throttle(() => {
        const currentUser = state.getState().user
        saveState('user', currentUser)
    }, 1000))
}

export const loadUserFromStorage = () => loadState('user');


export default userSlice.reducer
export const {setUserData, setJwt, removeUserData, removeJwt} = userSlice.actions
