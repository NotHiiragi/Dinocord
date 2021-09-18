# Dinocord
A WIP Discord library for Deno
Still working on it,

[Support server](https://discord.gg/YpxKYM2cvE)

# Example usage (Local machines, without the deno.land)
```typescript
import { Client, createMessage } from './mod.ts';

const client = new Client();
const TOKEN = "TOKEN";

client.on('ready', () => {
    console.log('Ready!');
});

client.on('message', async (message: any) => {
    console.log(message);
    if (message.content == 's') {
        await createMessage('I am a bot!', message.channel_id);
    }
});

client.connect(TOKEN);
```

# Insperation for this project

[Ano.js](https://github.com/ItsYaBoiElijah11/Ano.js)

[Katana](https://github.com/stuyy/Katana)
