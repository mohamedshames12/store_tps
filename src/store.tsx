import { configureStore, createSlice } from "@reduxjs/toolkit";

interface UserStateValue {
    username: string;
}

interface UserState {
    value:  UserStateValue;
}

const initialState = {value: {username: ""}} as UserState;

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state: UserState, action) => {
            state.value = action.payload;
        },

        logout: (state: UserState) => {
            state.value = initialState.value;
        }
    }
});


export const {login, logout} = userSlice.actions;


export const store = configureStore({
    reducer: {
        user: userSlice.reducer,
    },
});