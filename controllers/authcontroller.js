import User from "../Models/User.js";
import { StatusCodes } from 'http-status-codes';
import { BadRequestError } from '../errors/index.js';



const register= async (req, res) => {
	const { name, email, password } = req.body

	if (!name || !email || !password) {
		throw new BadRequestError('please provide all values')
	}
	const userAlreadyExists = await User.findOne({ email })
	if (userAlreadyExists) {
		throw new BadRequestError('Email already in use')
	}
	const user = await User.create({ name, email, password })
	const token = user.createJWT()
	res.status(StatusCodes.CREATED).json({
		/* Creating a new user object and assigning it to the user variable. */
		user: {
			email: user.email,
			lastName: user.lastName,
			location: user.location,
			name: user.name,
		},
		token,
		location: user.location,
	})

		if(!name || !email || !password) {
				throw new BadRequestError( "Please provide all the required fields");
		}
}

async function login(req, res) {
	res.send('login user');
}
const updateUser= async (req, res) => {
		res.send(' user Updted');
}

export { register,login,updateUser }