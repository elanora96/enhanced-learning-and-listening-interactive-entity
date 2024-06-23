/**
 * @file Sample Use Context Menu interaction
 * @commonjsauthor Krish Garg
 * @since 3.0.0
 * @version 3.2.2
 */

/**
 * @type {import('../../../typings').ContextInteractionCommand}
 */
export const data = {
  name: 'sample',
  type: 2, // 2 is for user context menus
};
export async function execute(interaction) {
  await interaction.reply({
    content: 'I am a sample user context menu.',
  });
  return;
}
