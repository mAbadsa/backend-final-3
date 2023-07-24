/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, _Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    return await queryInterface.bulkInsert('users', [
      {
        first_name: 'Qusai',
        last_name: 'Issa',
        email: 'qusai.issa@store.com',
        password: '123456asd',
        current_cart_id: null,
      },
      {
        first_name: 'Hala',
        last_name: 'Salhab',
        email: 'hala.salhab@store.com',
        password: '123456asd',
        current_cart_id: null,
      },
      {
        first_name: 'Oday',
        last_name: 'Abu Mettleq',
        email: 'oday.abumettleq@store.com',
        password: '123456asd',
        current_cart_id: null,
      },
      {
        first_name: 'Muhammad',
        last_name: 'Alabadsa',
        email: 'muhammad.alabadsa@store.com',
        password: '123456asd',
        current_cart_id: null,
      },
    ]);
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  },
};
