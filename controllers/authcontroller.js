import User from "../Models/User.js";
import { StatusCodes } from 'http-status-codes';
import {	BadRequestError, NotFoundError } from '../errors/index.js';



const register= async (req, res) => {
		const { name, email, password, } = req.body;

		if(!name || !email || !password) {
				throw new BadRequestError( "Please provide all the required fields");
		}
		/* Checking if the user already exists in the database. */
		const userAlreadyExists = await User.findOne({ email });
		if(userAlreadyExists) {
				throw new BadRequestError( "User already exists");
		}
		/* Creating a new user and returning the user object. */
		const user = await User.create(name, email, password);
		res.status(StatusCodes.OK).json({user});
}

const login= async(req, res) => {
		res.send('login user');
}
const updateUser= async (req, res) => {
		res.send(' user Updted');
}

export { register,login,updateUser }