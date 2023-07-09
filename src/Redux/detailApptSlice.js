import { createSlice } from "@reduxjs/toolkit";

export const detailApptSlice = createSlice({
    name: "detailAppt",
    initialState:
    {
        id: 
        {
            id: ""
        },
    },
    reducers: {
        saveAppt: (state, action) => {
            let { payload } = action;
            state.id = {
                id: payload.id
            }
        }
    },
});

export const detailApptData = (state) => state.detailAppt;
export const { saveAppt } = detailApptSlice.actions;
export default detailApptSlice.reducer;