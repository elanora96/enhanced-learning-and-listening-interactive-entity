/**
 * @file Default Error Message On Error Select Menu Interaction
 * @commonjsauthor Naman Vrati
 * @since 3.0.0
 */

/**
 * @description Executes when the select menu interaction could not be fetched.
 * @commonjsauthor Naman Vrati
 * @param {import('discord.js').SelectMenuInteraction} interaction The Interaction Object of the command.
 */
export async function execute(interaction) {
  await interaction.reply({
    content: 'There was an issue while fetching this select menu option!',
    ephemeral: true,
  });
  return;
}
