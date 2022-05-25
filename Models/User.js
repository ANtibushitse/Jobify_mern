import mongoose from "mongoose";
import validator from "validator";

/* Creating a schema for the user model. */
const UserSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, 'Please provide name'],
		minlength: 3,
		maxlength: 20,
		trim: true,
	},
	email: {
		type: String,
		required: [true, "Email is required"],
		validate: {
			validator: validator.isEmail,
			message: "please add a valid email"
		},
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
/* This is a middleware that is run before the user is saved to the database. It checks if the password
has been modified and if it has, it hashes the password. */

export default mongoose.model("User", UserSchema);