
import User from "../Models/User.js";



/**
 * It creates a new user in the database using the data from the request body
 * @param req - The request object represents the HTTP request and has properties for the request query string, parameters,
 * body, HTTP headers, and so on.
 * @param res - The response object.
 * @param next - This is a function that we call when we want to move on to the next middleware.
 */
const register= async (req, res, next) => {
    try {
        const user = await User.create(req.body);
        res.status(201).json(user);
    } catch (error) {
       next(error);
    }

}

const login= async(req, res) => {
    res.send('login user');
}
const updateUser= async (req, res) => {
    res.send(' user Updted');
}

export { register,login,updateUser }