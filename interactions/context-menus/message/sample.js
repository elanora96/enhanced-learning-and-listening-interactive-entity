/**
 * @file Sample Message Context Menu interaction
 * @commonjsauthor Krish Garg
 * @since 3.0.0
 * @version 3.2.2
 */

/**
 * @type {import('../../../typings').ContextInteractionCommand}
 */
export const data = {
  name: 'sample',
  type: 3, // 3 is for message context menus
};
export async function execute(interaction) {
  await interaction.reply({
    content: 'I am a sample message context menu.',
  });
  return;
}
