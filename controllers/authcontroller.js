import User from "../Models/User.js";
import { StatusCodes } from 'http-status-codes';

/**
 * It creates a new user in the database using the data from the request body
 * @param req - The request object represents the HTTP request and has properties for the request query string, parameters,
 * body, HTTP headers, and so on.
 * @param res - The response object.
 * @param next - This is a function that we call when we want to move on to the next middleware.
 */
const register= async (req, res) => {
		const { name, email, password, } = req.body;

		if(!name || !email || !password) {
				throw new Error("Please provide all the required fields");
		}
		const user = await User.create(name, email, password);
		res.status(StatusCodes.created).json({user});
}

const login= async(req, res) => {
		res.send('login user');
}
const updateUser= async (req, res) => {
		res.send(' user Updted');
}

export { register,login,updateUser }