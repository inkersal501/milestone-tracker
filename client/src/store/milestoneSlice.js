import { createSlice } from "@reduxjs/toolkit";

const milestoneSlice = createSlice({
    name: "milestone",
    initialState: {userMilestones: [], allMilestones: [], tips: []},
    reducers: {
        updateuserMilestones: (state, action) => {
            state.userMilestones = action.payload;
        },
        updateAllMilestones: (state, action) => {
            state.allMilestones = action.payload;
        },
        updateTips: (state, action) => {
            state.tips = action.payload;
        },
    },
});

export const { updateuserMilestones, updateAllMilestones, updateTips } = milestoneSlice.actions;
export default milestoneSlice.reducer;
