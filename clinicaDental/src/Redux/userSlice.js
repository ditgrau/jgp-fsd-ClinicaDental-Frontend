import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'user',
    initialState:
    {
        credentials:
        {
            token: '',
        },
        data:
        {
            id: '',
            name: '',
            role: '',
        }
    },
    reducers:
    {
        login: (state, action) => {
            let { payload } = action;
            (state.credentials = {
                token: payload.token,
            }),
                (state.data = {
                    id: payload.id,
                    name: payload.name,
                    role: payload.role
                })
        },
        logout: (state) => {
            return {
                credentials: {
                    token: ''
                },
                data: {
                    id: '',
                    name: '',
                    role: ''
                }
            };
        }
    }
})

export const userData = (state) => state.user;
export const { login , logout } = userSlice.actions;
export default userSlice.reducer;