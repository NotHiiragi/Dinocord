import Client from "./src/client/Client.ts";
import { Constants } from './src/constants/Constants.ts';

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

    const headers = { 'Content-Type': 'application/json', 'Authorization': `Bot ODc5NzY1NTYyMjk5OTI4NjY2.YSUfhw.TgOt1ox01PZnpCduEmjWe9-UECE`};

    const response = await fetch(`${Constants.API}/channels/${channelId}/messages`, {
        method: 'POST',
        headers,
        body: JSON.stringify(data),
    });

    const json = await response.json();
    console.log(json);
}
