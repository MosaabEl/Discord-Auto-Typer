I have developed a discord autotyping software that logs in automatically when launched and is then able to interact on any discord channel one wishes by typing out phrases randomly of any conversation script the user inserts in the code. The bot can automatically reply to other people in the chat and with different responses depending on words filtered out from other people’s replies.

The bot doesnt currently have a UI to dynamically change the script and login details; enter your discord login in index.js to add your username and password; edit the dc.login function.

To edit the automated script you must edit discord.js in the words[] array. Every element of this array has a random chance of being communicated.

Edit BASE_URL in discord.js to determine which channel the bot will move to and communicate in.

If you want to change and customize the time between each message sent by the bot (You can also make it variable), then scroll to the bottom of discord.js and change the numbers in the randomIntFromInterval parenthesis.
