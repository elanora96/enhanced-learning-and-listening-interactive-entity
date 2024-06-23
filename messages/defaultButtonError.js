/**
 * @file Default Error Message On Error Button Interaction
 * @commonjsauthor Naman Vrati
 * @since 3.0.0
 */

/**
 * @description Executes when the button interaction could not be fetched.
 * @commonjsauthor Naman Vrati
 * @param {import('discord.js').ButtonInteraction} interaction The Interaction Object of the command.
 */
export async function execute(interaction) {
  await interaction.reply({
    content: 'There was an issue while fetching this button!',
    ephemeral: true,
  });
  return;
}
