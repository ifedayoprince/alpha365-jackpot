import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import {router as baseRouter} from './routes/base.js';

const app = express();

// Configurations
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('x-powered-by', false);

// API routers
app.use('/api/v1', baseRouter);

// Catch all handler for all other request.
app.use('*', (req, res) => {
	res.send({
		data:{
			status: 404,
		msg:"Endpoint not available"
	} })
})

// Start the server
const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`index.js listening on ${port}`)
})
