import { Client } from "../client/Client.ts";
import { Payload } from "../interfaces/Payload.ts";
import ClientUser from "../client/ClientUser.ts";

export default function(client: Client, payload: Payload) {
    const { user } = payload.d;
    client.user = new ClientUser(
        user.username,
        user.discriminator,
        user.verified,
        user.id,
        user.flags,
        user.email,
        user.bot,
        user.avatar
    );
    client.emit('ready');
}