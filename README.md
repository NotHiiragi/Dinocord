# Welcome!
This is DinoCord a WIP project for a [deno](https://deno.land) discord library
# Dinocord
A WIP Discord library for Deno
Still working on it, AND you NEED Deno

[Support server](https://discord.gg/YpxKYM2cvE)

# Example usage (Local machines, without the deno.land)
```typescript
import Client from "./src/client/Client.ts";

const WS = new Client();

WS.on('ready', () => {
    console.log('Logged in.')
})

WS.connect("TOKEN")
```
Then run this line in the bot folders CMD:
"deno run --allow-net --allow-read index.ts"

(This is still WIP will change to MAIN branch when ready for release!!)

# Insperation for this project

[Ano.js](https://github.com/ItsYaBoiElijah11/Ano.js)

[Katana](https://github.com/stuyy/Katana)
