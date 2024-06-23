/**
 * @file Context Interaction Handler
 * @commonjsauthor Krish Garg & Naman Vrati
 * @since 3.0.0
 * @version 3.3.2
 */

import { Events } from 'discord.js';
import console from 'console';

export const name = Events.InteractionCreate;
export async function execute(interaction) {
  // Deconstructed client from interaction object.
  const { client } = interaction;

  // Checks if the interaction is a context interaction (to prevent weird bugs)
  if (!interaction.isContextMenuCommand()) return;

  /**********************************************************************/
  // Checks if the interaction target was a user
  if (interaction.isUserContextMenuCommand()) {
    const command = client.contextCommands.get(
      'USER ' + interaction.commandName,
    );

    // A try to execute the interaction.
    try {
      return await command.execute(interaction);
    } catch (err) {
      console.error(err);
      await interaction.reply({
        content: 'There was an issue while executing that context command!',
        ephemeral: true,
      });
    }
  }

  // Checks if the interaction target was a message
  else if (interaction.isMessageContextMenuCommand()) {
    const command = client.contextCommands.get(
      'MESSAGE ' + interaction.commandName,
    );

    // A try to execute the interaction.
    try {
      return await command.execute(interaction);
    } catch (err) {
      console.error(err);
      await interaction.reply({
        content: 'There was an issue while executing that context command!',
        ephemeral: true,
      });
    }
  }

  // Practically not possible, but we are still caching the bug.
  // Possible Fix is a restart!
  else {
    return console.log(
      'Something weird happening in context menu. Received a context menu of unknown type.',
    );
  }
}
