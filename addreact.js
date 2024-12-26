module.exports = {
  name: 'add',
  description: 'Add a reaction to a message',

  async execute(message, args) {
    if (args.length !== 1) {
      return message.reply('harap masukan message ID.');
    }
    const messageId = args[0];
    try {
      const fetchedMessage = await message.channel.messages.fetch(messageId);
      await fetchedMessage.react('ganti dengan emoji reaction');
      message.reply('berhasil memberikan reaction');
    } catch (error) {
      console.error('terjadi error pada pesan:', error);
      message.reply('gagal memberikan reaction. pastikan ID pesan benar');
    }
  },
};
