import User from "../Models/User.js";
import { StatusCodes } from 'http-status-codes';
import { BadRequestError } from '../errors/index.js';



const register= async (req, res) => {
		const { name, email, password, } = req.body;

		if(!name || !email || !password) {
				throw new BadRequestError( "Veuillez Remplir tous les champs");
		}
		/* Checking if the user already exists in the database. */
		const userAlreadyExists = await User.findOne({ email });
		if(userAlreadyExists) {
				throw new BadRequestError( "l'utilisateur existe déjà");
		}
		/* Creating a new user and returning the user object. */
		const user = await User.create(name, email, password);
		res.status(StatusCodes.OK).json({user});
		if(!name || !email || !password) {
				throw new BadRequestError( "Veuillez Remplir tous les champs");
		}
}

const login= async(req, res) => {
		res.send(' user logged in');
}
const updateUser= async (req, res) => {
		res.send(' user Updted');
}

export { register,login,updateUser }