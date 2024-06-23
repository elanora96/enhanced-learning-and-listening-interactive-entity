/**
 * @file Sample button interaction
 * @commonjsauthor Naman Vrati
 * @since 3.0.0
 * @version 3.2.2
 */

/**
 * @type {import('../../../typings').ButtonInteractionCommand}
 */
export const id = 'sample';
export async function execute(interaction) {
  await interaction.reply({
    content: 'This was a reply from button handler!',
  });
  return;
}
