import {
  connectWebSocket,
	WebSocket
} from "https://deno.land/std@0.68.0/ws/mod.ts";
import {
  Constants,
  OPCODE
} from '../constants/Constants.ts';
import {
  Heartbeat,
  Identify
} from '../constants/Payloads.ts'
import {
  Payload
} from '../interfaces/Payload.ts';
import Client from '../client/Client.ts'

export default class WebSocketManager {


  private socket: any;
  private interval: number = 0;



  async connect(token: string) {
    try {
      this.socket = await connectWebSocket(Constants.GATEWAY);
      for await (const msg of this.socket) {
        const payload: Payload = JSON.parse(msg.toString());
        const { t: event, op } = payload;
        switch (op) {
          case OPCODE.Dispatch:
          console.log('An event was triggered.')
          case OPCODE.Hello:
          const { heartbeat_interval } = payload.d;
            this.interval = this.heartbeat(heartbeat_interval);
            await this.identify(token);
            break;
          case OPCODE.Heartbeat_ACK:
            break;
				}
				if (event) {
					console.log(event);
				}
      }
    } catch (err) {
      console.log(err);
      return err;
    }
  }

  heartbeat(ms: number) {
    return setInterval(() => {
      this.socket.send(JSON.stringify(Heartbeat))
    }, ms);
  }
  async identify(token: string) {
    Identify.d.token = token;
    return this.socket.send(JSON.stringify(Identify))
  }
}