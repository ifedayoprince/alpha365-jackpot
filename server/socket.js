// socket.js

import {
	Server,
	Socket
}
from 'socket.io';

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

		console.log('requested current state');
		let state = {
			type: 0, // 0 for NORMAL, 1 for BIG, 2 for BOMB
			participants: 10,
			bets: 30,
			currentPrize: 3000,
			initialEntry: 2103
		}

		let progress = {
			minorTimer: [12, 0, 0], // hours, minutes, seconds
			bigTimer: [0, 6, 24],
			bombProgress: 0.74,
			bigProgress: 0.23
		}
		io.emit('update', state, progress)



		socket.on('disconnect', () => {
			console.log('User disconnected');
		});

		// Handle Socket.io events here

		socket.on('bet', (value) => {
			let betValue = value // 0 for $5, 1 for $10, 2 for $20
			
			state.currentPrize += betValue;
			state.bets += 1;
			progress.bigProgress = Math.random();
			progress.bombProgress = Math.random();
			
			console.log('some bet ', betValue)
			
			io.emit('update', state, progress)

		})
	});
}