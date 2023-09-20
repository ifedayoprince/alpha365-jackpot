import { io } from "socket.io-client";


let socket: any;

export function socketConnect() {
	localStorage.debug = '*';
	console.log("cinema", import.meta.env.VITE_SERVER_HOST)
	socket = io(`https://alpha-365.cyclic.cloud`, {
		origins: "*",
		rejectUnauthorized: false
	});
	socket.on("connect", () => {
		console.log("sn")
		console.log(socket.id); // x8WIv7-mJelg7on_ALbx
	});
	socket.on("connect_error", (error) => {
		console.log(error); // false
	});

	socket.on("update", (state, progress)=>{
		console.log("update state ", state, progress)
	})
}
