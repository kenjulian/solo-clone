'use strict';
module.exports = (sequelize, DataTypes) => {
  const Song = sequelize.define('Song', {
    userId: DataTypes.INTEGER,
    songUrl: DataTypes.STRING,
    picUrl: DataTypes.STRING,
    title: DataTypes.STRING
  }, {});
  Song.associate = function(models) {
    // associations can be defined here
  };
  return Song;
};