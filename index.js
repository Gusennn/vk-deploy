const VkBot = require('node-vk-bot-api');

const bot = new VkBot('11b1b5e7599bdc8083efab2ee9306d08b56a034bd6e5d1a7a3e529b5e915cb8c8b831871c16b0b49b0060');

bot.command('/start', (ctx) => {
    ctx.reply('Hello!');
});

bot.startPolling();