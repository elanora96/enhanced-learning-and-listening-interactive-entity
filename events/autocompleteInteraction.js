/**
 * @file Autocomplete Interaction Handler
 * @commonjsauthor Naman Vrati
 * @since 3.3.0
 * @version 3.3.2
 */

import { Events } from 'discord.js';
import console from 'console';

export const name = Events.InteractionCreate;
/**
 * @description Executes when an interaction is created and handle it.
 * @commonjsauthor Naman Vrati
 * @param {import('discord.js').AutocompleteInteraction & { client: import('../typings').Client }} interaction The interaction which was created
 */
export async function execute(interaction) {
  // Deconstructed client from interaction object.
  const { client } = interaction;

  // Checks if the interaction is an autocomplete interaction (to prevent weird bugs)
  if (!interaction.isAutocomplete()) return;

  // Checks if the request is available in our code.
  const request = client.autocompleteInteractions.get(interaction.commandName);

  // If the interaction is not a request in cache return.
  if (!request) return;

  // A try to execute the interaction.
  try {
    await request.execute(interaction);
  } catch (err) {
    console.error(err);
    return Promise.reject(err);
  }
}
