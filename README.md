# 🌌 enhanced-learning-and-listening-interactive-entity

### 🌠 (or e.l.l.i.e. for short 💫 (ellie for even shorter))

## 🧬 Based on [NamVr/DiscordBot-Template](https://github.com/NamVr/DiscordBot-Template#readme)

```
NamVr Discord Bot Template is an open source discord.js based bot template to get started on a new bot project. It is classic javascript template, not requiring any external dependencies unlike other famous frameworks. (This is not a framework!)
You can scale any kind of bot project using this template. (single server based or multiple server based) It all depends on your creativity!
```

<!-- TODO: rewrite this whole section -->

## 🎛️ Features:

e.l.l.i.e. takes (or probably will eventually take) advantage of [NamVr/DiscordBot-Template](https://github.com/NamVr/DiscordBot-Template#readme)'s features, such as:

_Features as described in [NamVr/DiscordBot-Template](https://github.com/NamVr/DiscordBot-Template#readme)'s README.md!_

> #### • **Dynamic Command Handler:**
>
> - My template comes in with a dynamic command handler! Using the command handler, you don't need to indulge in main bot files to create your very own command!
> - You can simply make command groups (categorized as folders) in the [commands](https://github.com/NamVr/DiscordBot-Template/tree/master/commands/) folder.
> - Your JavaScript commands goes inside respective category folders. A sample command is provided as [ping](https://github.com/NamVr/DiscordBot-Template/blob/master/commands/misc/ping.js) command. You can use the same skeleton for all commands you want!
>
> #### • **Dynamic Event Handler:**
>
> - All events goes inside the [events](https://github.com/NamVr/DiscordBot-Template/blob/master/events/) folder. You don't need to use `client.on()` in the main `bot.js` file to handle events.
> - Using simple skeleton code for events, you can make any amount of events in the events folder using the event handler.
>
> #### • **Dynamic Trigger Handler:**
>
> - Triggers occur when a specific "phrase" is said in a message content. For example, if you want your bot to react with :heart: when someone say `welcome` in their message, you can do that with this trigger handler!
> - Trigger Handler also has the same skeleton structure as of command handler. The trigger handler is associated with the [triggers](https://github.com/NamVr/DiscordBot-Template/tree/master/triggers/) folder. There are trigger categories, like [reactions](https://github.com/NamVr/DiscordBot-Template/tree/master/triggers/reactions) folder, in the trigger folder.
> - A sample trigger command is given in the [`hello.js`](https://github.com/NamVr/DiscordBot-Template/tree/master/triggers/reactions/hello.js) trigger file.
>
> #### • **Dynamic Slash Command Handler:**
>
> - My template comes with a dynamic slash command handler with very easy to customize and make slash commands.
> - The commands, in the slashCommands folder, receive an [`CommandInteraction`](https://discord.js.org/#/docs/main/stable/class/CommandInteraction) object. You can see the [documentation of discord.js](https://discord.js.org/#/docs/main/stable/class/CommandInteraction) for all the properties and methods available.
> - **IMPORTANT:** In the template, we are sending the slash commands to discord to be registered only to 1 guild. That is because their are 2 types of slash commands, guild and global. Guild commands are restricted to 1 guild but whenever you update them, they take effect immediately, whereas global commands take upto 1 hour to take effect. So use guild commands in development and global commands for production.
>
> #### • **Dynamic Buttons Interaction Handler:**
>
> - This template comes with a dynamic button interaction handler to receive and process button interactions.
> - Buttons can be classified in two category folders.
>
> #### • **Dynamic Modals Interaction Handler:**
>
> - Easily handle incoming modal submittions using the template handler!
> - Modals can be categorized in different folders.
>
> #### • **Dynamic Context Menu Handler:**
>
> - All new addition to discord API is context menus! You can right click a user or message -> Apps to find these options!
> - This template will register all your context menu options and dynamically interact with them! Worth a try.
>
> #### • **[NEW] Dynamic Autocomplete Interaction Request Handler:**
>
> - Easily handle incoming autocomplete requests using the template handler!
> - Perfectly dynamic for all your needs!
>
> #### • **Highly Customizable:**
>
> Using the template is so easy and fun, you would know. As the template does not rely on any external dependencies and written in javascript, it is highly customizable to any extend. There's no end to your creativity!
>
> #### • **Open source and self-hosted:**
>
> > It's yours, you have full control.

## 📥 Install

```sh
npm install
```

<!-- TODO: rewrite? -->

## ⚙️ Configuration

- Rename [`config-example.json`](https://github.com/NamVr/DiscordBot-Template/blob/master/config-example.json) to `config.json` and fill the token and other values. Extend config.json according to your needs!

## 🚀 Run e.l.l.i.e.

```sh
npm start
```

<!-- TODO: Write other guide? -->
<!-- ## Support & Documentation

I'm working to make it more professional and easy to use for everyone. There will be a documentation out very soon.

> WIP : https://djs.docs.namanvrati.cf/ -->

## 👩‍💻 Author

| Author         | Github                                    | Website                            |
| -------------- | ----------------------------------------- | ---------------------------------- |
| Elanora Manson | [elanora96](https://github.com/elanora96) | [elanora.lol](https://elanora.lol) |

## 👥 Contributors

| Name          | Github  | Website     |
| ------------- | ------- | ----------- |
| No            | One     | Yet!        |
| Contributions | Are     | Appreciated |
| Get           | Hacking | 😎          |

---

This project would have taken me a lot longer without the work done by the contributers to [NamVr/DiscordBot-Template](https://github.com/NamVr/DiscordBot-Template#readme)

As of `2024-06-22`, the ones thanked by the project are:

| Contributor          | Github                                                | Website                                     |
| -------------------- | ----------------------------------------------------- | ------------------------------------------- |
| Naman Vrati (Author) | [NamVr](https://github.com/NamVr)                     | [namanvrati.me](https://namanvrati.me/)     |
| Krish Garg           | [KrishGarg](https://github.com/KrishGarg)             | [krishgarg.com](https://www.krishgarg.com/) |
| Thomas Fournier      | [GoudronViande24](https://github.com/GoudronViande24) | [artivain.com](https://artivain.com/)       |

<!-- TODO: Add contributing guide -->
<!-- ## 🤝 Contributing

Contributions, issues and feature requests are welcome!

Feel free to check [issues page](https://github.com/NamVr/DiscordBot-Template/issues). You can also take a look at the [contributing guide](https://github.com/NamVr/DiscordBot-Template/blob/master/CONTRIBUTING.md). -->

<!-- TODO: Figure out what I want to support -->
<!-- ## Show your support

Give a ⭐️ if this project helped you! Star-ring the project gives me encouragement to continue it.
You can also [sponsor](https://ko-fi.com/namanvrati) the project and get listed as a contributer! Thanks a lot. -->

## 📝 License

Copyright © [Elanora Manson](https://github.com/elanora96).

[NamVr/DiscordBot-Template](https://github.com/NamVr/DiscordBot-Template#readme) is Copyright © 2021 [Naman Vrati](https://github.com/NamVr).

This project is [Apache-2.0](LICENSE) licensed, following its template upstream.
