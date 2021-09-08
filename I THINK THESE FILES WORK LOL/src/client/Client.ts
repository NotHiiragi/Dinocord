import EventEmitter from 'https://deno.land/std@0.51.0/node/events.ts';
import WebSocketManager from '../ws/WebSocketManager.ts';
import ClientUser from './ClientUser.ts';

export default class Client extends EventEmitter {

    private socket: WebSocketManager = new WebSocketManager(this);

    private _user!: ClientUser;

    async connect(token: string) {
        this.socket.connect(token);
    }

    set user(user: ClientUser) {
        this._user = user;
    }

    get user() {
        return this._user;
    }
}