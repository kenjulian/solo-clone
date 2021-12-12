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
    Song.belongsTo(models.User, {foreignKey: 'userId'});
    Song.hasMany(models.Comment, {foreignKey: 'songId', onDelete: 'CASCADE', hooks: true}) 
  };
  return Song;
};