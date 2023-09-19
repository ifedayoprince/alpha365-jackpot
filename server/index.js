import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import http from 'http';
import session from 'express-session';
import { initializeSocketIO } from './socket.js'; // Import the Socket.io logic
import cookieParser from 'cookie-parser';
import MemoryStore from 'memorystore';

const MemoryStoreInstance = MemoryStore(session);
const app = express();
const server = http.createServer(app);

const allowedOrigins = (origin, callback) => {
  const whitelist = ['https://alpha365-jackpot.ifedayoprince.repl.co', 'https://alpha365-jackpot.vercel.app']; // Add your client origins here
  if (whitelist.indexOf(origin) !== -1) {
    callback(null, true);
  } else {
    callback(new Error('Not allowed by CORS'));
  }
};

// Configurations
app.use(cors({
  origin: allowedOrigins, // Replace with your client's origin
  methods: ['GET', 'POST', 'OPTION'],
  credentials: true, // Enable credentials (cookies, sessions) if needed
}));
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.set('x-powered-by', false);

// Set up session middleware
app.use(
  session({
    name: 'sessionId', // Customize the session cookie name
    secret: 'your-secret-key', // Replace with your own secret key
    resave: false,
    store: new MemoryStoreInstance({
    	checkPeriod: 86400000 // prune expired entries every 24h
    }),
    saveUninitialized: true,
    cookie: {
      maxAge: 3600000
    },
  })
);

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
