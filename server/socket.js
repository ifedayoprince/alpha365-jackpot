// socket.js

import { Server, Socket } from 'socket.io';

// Initialize Socket.io logic
export function initializeSocketIO(server) {
  const io = new Server(server, {
  	cors: {
  		origin: (_req, callback) => {
  			callback(null, true);
  		},
  		credentials: true
  	}
  });

  io.on('connection', (socket) => {
    console.log('A user connected');
    

    socket.on('disconnect', () => {
      console.log('User disconnected');
    });
    
        // Handle Socket.io events here

    
    
    
  });
}
