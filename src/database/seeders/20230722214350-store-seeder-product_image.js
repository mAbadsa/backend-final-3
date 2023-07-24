/* eslint-disable @typescript-eslint/explicit-function-return-type */
'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, _Sequelize) {
    await queryInterface.bulkInsert(
      'product_images',
      [
        {
          src: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-model-unselect-gallery-2-202207_GEO_US?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1654893618197',
          alt: 'iphone-13',
          product_id: 1,
        },
        {
          src: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MPPP3?wid=532&hei=582&fmt=png-alpha&.v=1662503140974',
          alt: 'iPhone 13 Mini',
          product_id: 2,
        },
        {
          src: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MQDP3?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1664481446939',
          alt: 'MacBook Pro 16-inch',
          product_id: 3,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
