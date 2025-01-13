import { io } from "socket.io-client";
import config from "./config";

const socket = io(`http://localhost:${config.api_port}`); // Replace with your backend URL
export default socket;