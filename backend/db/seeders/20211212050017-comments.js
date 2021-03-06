'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('Comments', [
     {
       userId: 1,
       songId: 1,
       body: 'This song is fire',
       createdAt: new Date(),
       updatedAt: new Date(),
     },
     {
       userId: 2,
       songId: 2,
       body: 'This song is aight',
       createdAt: new Date(),
       updatedAt: new Date(),
     },
     {
       userId: 2,
       songId: 2,
       body: 'This song is aight',
       createdAt: new Date(),
       updatedAt: new Date(),
       
     },
     {
      userId: 3,
      songId: 3,
      body: 'This song is okay',
      createdAt: new Date(),
      updatedAt: new Date(),
    },

  ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Comments', null, {});
  }
};
