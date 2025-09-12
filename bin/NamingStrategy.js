/* eslint-disable */
const NamingStrategy = require('typeorm-model-generator/dist/src/NamingStrategy');

NamingStrategy.entityName = function (entityName, entity) {
  // console.log(entityName, entity.database);
  return entityName;
};

NamingStrategy.fileName = function (fileName) {
  return `${fileName}.entity`;
};

module.exports = {
  ...NamingStrategy,
};