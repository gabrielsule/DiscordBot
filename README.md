# Creación de un bot para Discord

### Prerequisitos
- [NodeJS](https://nodejs.org/es/)
- [Discord.js](https://discord.js.org)
- [VS Code](https://code.visualstudio.com/)

### Creación del proyecto
```bash
npm init -y
```

### Instalar discord.js
```bash
npm i discord.js
```

### Instanciar discord.js
```javascript
const { Client, RichEmbed } = require('discord.js');
const client = new Client();

client.on('ready', () => {
    console.log(`Bot ejecutandose como ${client.user.tag}`);
});
```

### Login por medio del token
```javascript
client.login(token);
```

### Recibiendo y enviando mensajes
```javascript
client.on('message', async msg => {
    console.log(msg.content);
});
```

### Probando respuesta del bot
```javascript
if (msg.content === 'ping') {
    msg.reply('pong');
}
```

### Respondiendo al autor del mensaje
```javascript
if (msg.content === 'hola') {
    msg.channel.send(`Hola ${msg.author}`);
}
```

### Crear un comando help
```javascript
if (msg.content === '!help') {
    const embed = new RichEmbed()
    .setTitle('Help')
    .setColor('RED')
    .setAuthor('Gabriel', 'url de la imagen')
    .setDescription('Nulla irure incididunt elit ipsum cupidatat dolore.')
    .setURL('https://gabrielsule.github.io/')
    msg.channel.send(embed);
}
```

### Eliminar un mensaje determinado
```javascript
if (msg.content === '!test') {
    msg.channel.send('Test no permitido');
    msg.delete();
}
```

### Eliminar 100 mensajes
```javascript
if (msg.content === '!clean') {
    const deleteMsg = await msg.channel.fetchMessages({limit: 100});
    msg.channel.bulkDelete(deleteMsg);
}
```

[Ver código completo](https://github.com/gabrielsule/DiscordBot)

