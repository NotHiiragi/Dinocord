export enum Constants {
    GATEWAY = 'wss://gateway.discord.gg/?v=6&encoding=json',
    API = 'https://discord.com/api/v6',
}

export enum OPCODE {
    Dispatch = 0,
    Heartbeat = 1,
    Identify = 2,
    Presence_Update = 3,
    Voice_State_Update = 4,
    Resume = 6,
    Reconnect = 7,
    Request_Guild_Members = 8,
    Invalid_Session = 9,
    Hello = 10,
    Heartbeat_ACK = 11,
}