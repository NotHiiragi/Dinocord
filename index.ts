/*import {
    connectWebSocket,
} from "https://deno.land/std@0.68.0/ws/mod.ts";

const GATEWAY = 'wss://gateway.discord.gg/?v=6&encoding=json';
try {
    const socket = await connectWebSocket(GATEWAY);
    console.log("Connected.");
    for await (const m of socket) {
        const payload = JSON.parse(m.toString());
        const { t, s, op, d } = payload;
        const { heartbeat_interval } = d;
        const p = { op: 1, d: null };
        switch (op) {
            case 10:
                setInterval(() => {
                    console.log(`Sending heartbeat every ${heartbeat_interval} ms`);
                    socket.send(JSON.stringify(p));
                }, heartbeat_interval);
                const token = "ODc5NzY1NTYyMjk5OTI4NjY2.YSUfhw.69mwQYpaGPvHxG5cjXBlyams5_M";
                const intents = 513;
                const properties = { $os: 'linux', $browser: 'DinoCord', $device: 'DinoCord' };
                const identify = {
                    op: 2,
                    d: { token, intents, properties},
                };
                socket.send(JSON.stringify(identify));
                break;
        }
        console.log(payload);
    }
} catch (err) {
    console.log(err);
}*/

import WebSocketManager from "./src/ws/WebSocketManager.ts";

const WebSocket = new WebSocketManager();

WebSocket.connect("token")