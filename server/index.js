import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import http from 'http';
import session from 'express-session';
import { initializeSocketIO } from './socket.js'; // Import the Socket.io logic


const app = express();
const server = http.createServer(app);

// Configurations
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('x-powered-by', false);

// Set up session middleware

// API routers
// app.use('/api/v1', baseRouter);

// Catch all handler for all other requests.
app.use('*', (req, res) => {
  res.send({
    data: {
      status: 404,
      msg: 'Endpoint not available',
    },
  });
});


initializeSocketIO(server);

// Start the server
const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`index.js listening on ${port}`);
});
