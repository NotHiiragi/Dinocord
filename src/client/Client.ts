import EventEmitter from 'https://deno.land/std@0.51.0/node/events.ts';
import WebSocketManager from '../ws/WebSocketManager.ts';
import ClientUser from './ClientUser.ts';
import RestAPIHandler from './rest/RestAPIHandler.ts';



export class Client extends EventEmitter {

    private socket: WebSocketManager = new WebSocketManager(this);
    rest = new RestAPIHandler();
    private _user!: ClientUser;

    async connect(token: string) {
          this.rest.token = token;
          await this.socket.connect(token);
    }

    async connects(token: string) {
        this.socket.connect(token);
    }

    set user(user: ClientUser) {
        this._user = user;
    }

    get user() {
        return this._user;
    }
}