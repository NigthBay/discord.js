const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'demo') {
    msg.reply('demo');
  }
});

client.login('NDQ4NDM1ODQyNjU5MTIzMjEx.DeWMOQ.29xxBmjHirI6F-rsMmdrJKRnlRI');