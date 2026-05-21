module.exports = async (bot, msg) => {
    const chatId = msg.chat.id;

    bot.sendMessage(chatId, `
🚀 PERSEUS INTELLIGENCE SYSTEM

Status: ACTIVE
Mode: Standby Analysis

Command:
/start - Jalankan sistem
/analyze - Analisa market

System ready...
    `);
};
