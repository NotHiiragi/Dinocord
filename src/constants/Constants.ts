export enum Constants {
  GATEWAY = 'wss://gateway.discord.gg/?v=9&encoding=json',
}


// Find meanings at https://discord.com/developers/docs/topics/opcodes-and-status-codes#gateway
export enum OPCODE {
  Dispatch = 0,
  Heartbeat = 1,
  Identify = 2,
  Presence_Update = 3,
  Voice_State_Update = 4,
  Resume = 6,
  Reconnect = 7,
  Request_Guild_Members	= 8,
  Invalid_Session = 9,
  Hello = 10,
  Heartbeat_ACK = 11
};