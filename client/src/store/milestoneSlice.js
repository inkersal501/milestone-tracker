import { createSlice } from "@reduxjs/toolkit";

const milestoneSlice = createSlice({
    name: "milestone",
    initialState: {data: []},
    reducers: {
        updateMilestones: (state, action) => {
            state.data = action.payload;
        },
    },
});

export const { updateMilestones } = milestoneSlice.actions;
export default milestoneSlice.reducer;
