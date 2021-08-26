import { OPCODE } from './Constants.ts'

export const Heartbeat = {
  op: 1,
  d: null,
};

const token = "";
const intents = 513;
const properties = { $os: "linux", $browser: "Dinocord", $device: "Dinocord" };

export const Identify = {
  op: 2,
  d: {
    token,
    intents,
    properties,
  }
};
/*								const token = '<TOKEN>';
                const intents = 513;
                const properties = { $os: 'linux', $browser: 'deno-discord', $device: 'deno-discord' };
                const identify = {
                    op: 2,
                    d: { token, intents, properties }
                };
*/
