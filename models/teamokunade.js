'use strict';
module.exports = (sequelize, DataTypes) => {
  var Teamokunade = sequelize.define('Teamokunade', {
    name: DataTypes.STRING
  });

  Teamokunade.associate = function (models) {
    models.Teamokunade.belongsTo(models.User, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Teamokunade;
};
