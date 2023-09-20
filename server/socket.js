import sockjs from 'sockjs';

// Initialize SockJS logic
export function initializeSockJS(server) {
    const sockServer = new sockjs.createServer({prefix: '/echo'});
    sockServer.attach(server);
    
    
    sockServer.on('connection', (conn) => {
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

        conn.write(JSON.stringify({ event: 'update', data: { state, progress } }));

        conn.on('close', () => {
            console.log('User disconnected');
        });

        // Handle SockJS events here

        conn.on('data', (message) => {
            const parsedMessage = JSON.parse(message);
            if (parsedMessage.event === 'bet') {
                let betValue = parsedMessage.data; // 0 for $5, 1 for $10, 2 for $20

                state.currentPrize += betValue;
                state.bets += 1;
                progress.bigProgress = Math.random();
                progress.bombProgress = Math.random();

                console.log('some bet ', betValue);

                conn.write(JSON.stringify({ event: 'update', data: { state, progress } }));
            }
        });
    });
}