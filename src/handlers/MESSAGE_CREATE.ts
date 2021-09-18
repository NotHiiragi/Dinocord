import { Client } from "../client/Client.ts";
import { Payload } from "../interfaces/Payload.ts";
import ClientUser from "../client/ClientUser.ts";

export default function(client: Client, payload: Payload) {
    client.emit('message', payload.d);
}