const register= (req, res) => {
    res.send('register user');
}

const login= (req, res) => {
    res.send('login user');
}
const updateUser= (req, res) => {
    res.send(' user Updted');
}

export { register,login  ,updateUser }