/**
 * @file Default Bot Mention Command
 * @commonjsauthor Naman Vrati
 * @since 3.0.0
 */

import { prefix } from '../config.json';

/**
 * @description Executes when the bot is pinged.
 * @commonjsauthor Naman Vrati
 * @param {import('discord.js').Message} message The Message Object of the command.
 */
export async function execute(message) {
  return message.channel.send(
    `Hi ${message.author}! My prefix is \`${prefix}\`, get help by \`${prefix}help\``,
  );
}
