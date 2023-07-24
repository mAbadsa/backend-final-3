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
    await queryInterface.bulkInsert(
      'categories',
      [
        {
          name: 'Phones',
          description: 'Mobile phones and smartphones.',
          img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MQU73?wid=532&hei=582&fmt=png-alpha&.v=1676920930838',
        },
        {
          name: 'Laptops',
          description: 'Notebook computers and ultrabooks.',
          img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MJQK3?wid=532&hei=582&fmt=png-alpha&.v=1665496505001',
        },
      ],
      {}
    );
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('categories', null, {});
  },
};
