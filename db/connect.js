import mongoose from 'mongoose';

function connectDB(url) {
	return mongoose.connect(url)
		.then(() => console.log("CONNCETED TO THE DB"))
		.catch(err => console.log(err));
}

export default connectDB;