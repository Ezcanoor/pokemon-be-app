'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Pokemons', [
      {
        name: 'Bulbasaur',
        status: 'free',
      },
      {
        name: 'Ivysaur',
        status: 'free',
      },
      {
        name: 'Venosaur',
        status: 'free',
      },
      {
        name: 'Charmander',
        status: 'free',
      },
      {
        name: 'Charmeleon',
        status: 'free',
      },
      {
        name: 'Squirtle',
        status: 'free',
      },
      {
        name: 'Wartortle',
        status: 'free',
      },
      {
        name: 'Blaistoise',
        status: 'free',
      },
      {
        name: 'Caterpie',
        status: 'free',
      },
      {
        name: 'Metapod',
        status: 'free',
      },
      {
        name: 'butterfree',
        status: 'free',
      },
      {
        name: 'Weedle',
        status: 'free',
      },
      {
        name: 'Kakuna',
        status: 'free',
      },
      {
        name: 'Beedrill',
        status: 'free',
      },
    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete('Pokemons', null, {});
  }
};
