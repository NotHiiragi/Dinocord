import Client from "./src/client/Client.ts";
import { Constants } from './src/constants/Constants.ts';
import { headers } from './src/constants/Payloads.ts';

const client = new Client();


client.connect("TOKEN");

client.on('ready', () => {
    console.log('Logged in.')
});

client.on('message', async (message: any) => {
    console.log(message);
    if (message.content == 's') {
        await createMessage('I am a bot!', message.channel_id);
    }
});

async function createMessage(content: string, channelId: string) {

    const data = {
        "content": content,
        "tts": false,
    };

    const response = await fetch(`${Constants.API}/channels/${channelId}/messages`, {
        method: 'POST',
        headers,
        body: JSON.stringify(data),
    });

    const json = await response.json();
    console.log(json);
}
