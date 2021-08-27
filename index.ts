import Client from "./src/client/Client.ts";

const WS = new Client();

WS.on('ready', () => {
    console.log('Logged in.')
})

WS.connect("TOKEN")
