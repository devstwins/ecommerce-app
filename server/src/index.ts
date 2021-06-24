import express from 'express';
import mongoose from 'mongoose';
import 'dotenv/config';

const app = express();

const PORT = process.env.PORT;

mongoose
	.connect(`${process.env.CONNECTION_URL}`, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
	})
	.then(() =>
		app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
	)
	.catch((err: Error) => {
		console.log(err.message);
	});
