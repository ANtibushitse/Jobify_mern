import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
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
UserSchema.pre('save', async function () {
	// console.log(this.modifiedPaths())
	if (!this.isModified('password')) return
	const salt = await bcrypt.genSalt(10)
	this.password = await bcrypt.hash(this.password, salt)
})

//JWT schma
/* This is a method that is used to create a JWT token. */
UserSchema.methods.createJWT = function () {
	return jwt.sign({ userId: this._id }, process.env.JWT_SECRET, 
		{expiresIn: process.env.JWT_LIFETIME})
}
export default mongoose.model("User", UserSchema);