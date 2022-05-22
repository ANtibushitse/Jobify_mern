import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        minlength: [3, "Name must be at least 3 characters long"],
        maxlength: [20, "Name must be less than 20 characters long"],
        trim: true,
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minlength: [8, "Password must be at least 8 characters long"],
    },
    lastName: {
        type: String,
        trim: true,
        maxlength: 20,
        default: "Last Name",
    },
    location: {
        type: String,
        trim: true,
        maxlength: 20,
        default: "My City"
    },
});

export default mongoose.model("User", UserSchema);