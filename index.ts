import WebSocketManager from "./src/ws/WebSocketManager.ts";

const WebSocket = new WebSocketManager();

WebSocket.connect("token")
