import mongoose, { mongo, Schema } from "mongoose";
import { string } from "zod";

const userSchema = new Schema ({
    name: {
        type: string,
        required: true,
    },
    email: {
        type: string,
        required: true,
    },
    password: {
        type: string,
        required: true,
    }
}, {timestamps: true});
const User = models.User || mongoose.model("User", userSchema)
export default User;
