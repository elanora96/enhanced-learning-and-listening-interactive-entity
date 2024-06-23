/**
 * @file Default Error Message On Error Modal Interaction
 * @commonjsauthor Naman Vrati
 * @since 3.2.0
 */

/**
 * @description Executes when the modal interaction could not be fetched.
 * @commonjsauthor Naman Vrati
 * @param {import('discord.js').ModalSubmitInteraction} interaction The Interaction Object of the command.
 */
export async function execute(interaction) {
  await interaction.reply({
    content: 'There was an issue while fetching this modal!',
    ephemeral: true,
  });
  return;
}
