import { io } from "socket.io-client";

const socket = io(`wss://${import.meta.env.VITE_SERVER_HOST}`);

export function socketConnect() {
socket.on("connect", () => {
  console.log(socket.id); // x8WIv7-mJelg7on_ALbx
});
} 