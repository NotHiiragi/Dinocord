import { headers } from '../../mod.ts';
import { Constants } from '../../mod.ts';

export async function createMessage(content: string, channelId: string) {

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
