'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('Songs', [
    {
      userId: 1,
      picUrl: 'https://res.cloudinary.com/daice34nn/image/upload/v1638925018/stephen-leonardi-wPlzrculha8-unsplash_fktopp.jpg',
      songUrl: 'https://res.cloudinary.com/daice34nn/video/upload/v1638917935/fly-away-mountaineer-main-version-02-11-7638_snba0c.mp3',
      title: 'Moutaineer - Fly Away',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      userId: 2,
      picUrl: 'https://res.cloudinary.com/daice34nn/image/upload/v1638924851/noxz_ulvft3.jpg',
      songUrl: 'https://res.cloudinary.com/daice34nn/video/upload/v1638920492/flvx-noxz-main-version-01-35-19855_grf1aa.mp3',
      title: "Noxz - Flvx ",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      userId: 3,
      picUrl: 'https://res.cloudinary.com/daice34nn/image/upload/v1638924496/karl-magnuson-85J99sGggnw-unsplash_yqavsw.jpg',
      songUrl: 'https://res.cloudinary.com/daice34nn/video/upload/v1638920664/keep-it-easy-ra-main-version-02-14-5149_q9jzmh.mp3',
      title: 'Ra - Keep It Easy',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      userId: 1,
      picUrl: 'https://res.cloudinary.com/daice34nn/image/upload/v1638924360/noah-silliman-vhInzGLpnyI-unsplash_bygr0w.jpg',
      songUrl: 'https://res.cloudinary.com/daice34nn/video/upload/v1638920751/moonshine-prigida-main-version-01-36-17027_sg5elo.mp3',
      title: 'Prigida - Moonshine',
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
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
