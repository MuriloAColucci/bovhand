'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('animals', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      user_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'users', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      register: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      nameanimal: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      race: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      gender: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      origin: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      birthday: {
        type: Sequelize.DATEONLY(3),
        allowNull: false,
      },
      price: {
        type: Sequelize.DECIMAL,
        allowNull: false,
      },
      mother: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      father: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE(3),
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP(3)'),
      },
      updated_at: {
        type: Sequelize.DATE(3),
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3)'),
      },
    })
  },

  down: async (queryInterface, Sequelize) => {
     return queryInterface.dropTable('animals');
  }
};