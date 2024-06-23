/**
 * @file Sample ping command
 * @commonjsauthor Naman Vrati
 * @since 1.0.0
 * @version 3.2.2
 */

/**
 * @type {import('../../typings').LegacyCommand}
 */
export const name = 'ping';
export function execute(message) {
  message.channel.send({ content: 'Pong.' });
}
