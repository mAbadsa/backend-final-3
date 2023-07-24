/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, _Sequelize) {
    await queryInterface.bulkInsert(
      'brands',
      [
        {
          name: 'Apple',
          description:
            'Apple Inc. is an American multinational technology company.',
          img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MQU73?wid=532&hei=582&fmt=png-alpha&.v=1676920930838',
        },
        // Add more brands if needed
      ],
      {}
    );
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('brands', null, {});
  },
};
