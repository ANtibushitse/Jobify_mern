import User from "../Models/User.js";


/**
 * It creates a new user in the database using the information provided in the request body
 * 
 * @param req The request object represents the HTTP request and has properties for the request query
 * string, parameters, body, HTTP headers, and so on.
 * @param res The response object.
 */
const register= async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({msg: 'There was an error Registering the user'});
    }
}

const login= async(req, res) => {
    res.send('login user');
}
const updateUser= async (req, res) => {
    res.send(' user Updted');
}

export { register,login,updateUser }