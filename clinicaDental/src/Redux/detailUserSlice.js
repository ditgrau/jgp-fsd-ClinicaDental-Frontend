import { createSlice } from "@reduxjs/toolkit";

export const detailUserSlice = createSlice({
    name: "detailUser",
    initialState:
    {
        id: 
        {
            id: ""
        },
        name: 
        {
            name: ""
        }
    },
    reducers: {
        saveId: (state, action) => {
            let { payload } = action;
            state.id = {
                id: payload.id
            }
        },
        saveName: (state, action) => {
            let { payload } = action;
            state.name = {
                name: payload.name
            }
        }
    },
});

export const detailUserData = (state) => state.detailUser;
export const { saveId, saveName } = detailUserSlice.actions;
export default detailUserSlice.reducer;