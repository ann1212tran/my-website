import mongoose, { models, mongo, Schema } from "mongoose";
import { string } from "zod";

const userSchema = new Schema (
    {
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
}, 
{ timestamps: true }
);

const User = models.User || mongoose.model("User", userSchema)
export default User;
