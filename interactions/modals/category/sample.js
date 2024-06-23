/**
 * @file Sample modal interaction
 * @commonjsauthor Naman Vrati
 * @since 3.2.0
 * @version 3.2.2
 */

/**
 * @type {import('../../../typings').ModalInteractionCommand}
 */
export const id = 'sample';
export async function execute(interaction) {
  await interaction.reply({
    content: 'This was a reply from modal handler!',
  });
  return;
}
