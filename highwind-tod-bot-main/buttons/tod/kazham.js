const { ActionRowBuilder, ModalBuilder, TextInputBuilder, TextInputStyle } = require('discord.js');

module.exports = {
    data: { name: 'kazham' },
    async execute(interaction) {
        const modal = new ModalBuilder()
            .setCustomId('kazham')
            .setTitle('Kazham Report');

        const todInput = new TextInputBuilder()
            .setCustomId('todInput')
            .setLabel('Time of Death')
            .setPlaceholder('Leave blank for "now"')
            .setRequired(false)
            .setStyle(TextInputStyle.Short);

        const actions = new ActionRowBuilder()
            .addComponents(todInput);

        modal.addComponents(actions);

        await interaction.showModal(modal);
    },
};
