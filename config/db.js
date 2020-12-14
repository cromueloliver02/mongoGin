const mongoose = require('mongoose');

const ConnectDB = async () => {
	try {
		await mongoose.connect(process.env.MONGO_URI, {
			useNewUrlParser: true,
			useCreateIndex: true,
			useUnifiedTopology: true,
			useFindAndModify: false
		});

		console.log('MongoDB connected');
	} catch (err) {
		console.log(err.message);
		process.exit(1);
	}
};

module.exports = ConnectDB;
