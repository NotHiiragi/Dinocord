import { Client } from "../Client.ts";
import { headers } from "../../constants/Payloads.ts";

export default class RestAPIHandler {
    private _token: string = "";

    set token(token: string) {
        this._token = token;
        headers.Authorization = `Bot ${this._token}`;
    }
}