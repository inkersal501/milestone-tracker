import mongoose from "mongoose";

const milestoneSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true,
        },
        date: {
            type: Date,
            required: true,
        },
        notes: {
            type: String,
            default: '',
            trim: true,
        },
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
    },
{timestamps : true});
const Milestone = mongoose.model("Milestone", milestoneSchema);
export default Milestone;