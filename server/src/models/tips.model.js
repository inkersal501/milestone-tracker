import mongoose from "mongoose";

const tipsSchema = mongoose.Schema(
    {
        content: {
            type: String,
            required: true,
            trim: true,
        },
        milestoneId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Milestone",
            required: true,
        },
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
    },
{timestamps : true});
const Tips = mongoose.model("Tips", tipsSchema);
export default Tips;