const Discord = require('discord.js');

const client = new Discord.Client();

client.once('ready', () => {
    console.log('I am ready!');
    client.user.setActivity('-commands for help!', {type: 'PLAYING'});
});

 

client.on('message', message => {

    if (message.content === 'ping') {

       message.reply('pong');

       }

});

client.login(process.env.NzY2MTQzMjE4MTQwMDUzNTA0.X4fEeQ.LTmGkISVbdkITnr5XxUJ6-3w3z0);
