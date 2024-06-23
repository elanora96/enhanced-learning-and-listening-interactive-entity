/**
 * @file Button Interaction Handler
 * @commonjsauthor Naman Vrati
 * @since 3.0.0
 * @version 3.3.2
 */

import { Events } from 'discord.js';
import console from 'console';

export const name = Events.InteractionCreate;
/**
 * @description Executes when an interaction is created and handle it.
 * @commonjsauthor Naman Vrati
 * @param {import('discord.js').ButtonInteraction & { client: import('../typings').Client }} interaction The interaction which was created
 */
export async function execute(interaction) {
  // Deconstructed client from interaction object.
  const { client } = interaction;

  // Checks if the interaction is a button interaction (to prevent weird bugs)
  if (!interaction.isButton()) return;

  const command = client.buttonCommands.get(interaction.customId);

  // If the interaction is not a command in cache, return error message.
  // You can modify the error message at ./messages/defaultButtonError.js file!
  if (!command) {
    return await import(`../messages/defaultButtonError`).execute(interaction);
  }

  // A try to execute the interaction.
  try {
    return await command.execute(interaction);
  } catch (err) {
    console.error(err);
    await interaction.reply({
      content: 'There was an issue while executing that button!',
      ephemeral: true,
    });
  }
}
