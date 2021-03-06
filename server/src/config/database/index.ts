import Sequelize from 'sequelize';

import { logger } from '../logger';
import { initDefaultData } from './default';

const sequelize = new Sequelize('shooney_management', 'hunseol', 'hunseol', {
  host: '127.0.0.1',
  dialect: 'mysql',

  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 20000,
  },
  define: {
    charset: 'utf8',
    underscored: true,
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    deletedAt: 'deleted_at',
    paranoid: true,

    hooks: {
      // beforeFind: (instance, fn: () => void) => {
      //   logger.debug(`beforeFind`);
      //   logger.debug(instance);
      // },
      // beforeCreate: (instance, options, fn: () => void) => {
      //   logger.debug(`beforeCreate`);
      //   logger.debug(instance);
      // },
      // beforeUpdate: (instance, options, fn: () => void) => {
      //   logger.debug(`beforeUpdate`);
      //   logger.debug(instance);
      // },
      // beforeDestroy: (instance, options, fn: () => void) => {
      //   logger.debug(`beforeDestroy`);
      //   logger.debug(instance);
      // },
    },
  },
});

sequelize.sync({ force: true }).then(() => {
  initDefaultData();
});
sequelize.authenticate().then(() => {
  console.log('Sequelize Connection has been established successfully.');
}).catch((err) => {
  console.error('Unable to connect to the database:', err);
});

export { sequelize };
