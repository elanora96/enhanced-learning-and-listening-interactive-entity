/**
 * @file Ready Event File.
 * @commonjsauthor Naman Vrati
 * @since 1.0.0
 * @version 3.2.2
 */

import { Events } from 'discord.js';
import console from 'console';

export const name = Events.ClientReady;
export const once = true;
export function execute(client) {
  console.log(`Ready! Logged in as ${client.user.tag}`);
}
