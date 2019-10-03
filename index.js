const { Client, RichEmbed } = require('discord.js');
const client = new Client();

client.on('ready', () => {
    console.log(`Bot ejecutandose como ${client.user.tag}`);
});

client.on('message', async msg => {
    console.log(msg.content);

    // prueba de respuesta
    if (msg.content === 'ping') {
        msg.reply('pong');
    }

    // responderle al autor
    if (msg.content === 'hola') {
        msg.channel.send(`Hola ${msg.author}`);
    }

    // llamar al comando help
    if (msg.content === '!help') {
        const embed = new RichEmbed()
        .setTitle('Help')
        .setColor('RED')
        .setAuthor('Gabriel', 'url de la imagen')
        .setDescription('Nulla irure incididunt elit ipsum cupidatat dolore.')
        .setURL('https://gabrielsule.github.io/')
        msg.channel.send(embed);
    }

    // eliminar un mensaje determinado
    if (msg.content === '!test') {
        msg.channel.send('Test no permitido');
        msg.delete();
    }

    // eliminar 100 mensajes
    if (msg.content === '!clean') {
        const deleteMsg = await msg.channel.fetchMessages({limit: 100});
        msg.channel.bulkDelete(deleteMsg);
    }
});

client.login(token);
