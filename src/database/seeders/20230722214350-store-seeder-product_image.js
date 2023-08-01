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
        {
          src: 'https://m.media-amazon.com/images/I/41bIlvE1rdL.jpg',
          alt: 'Iphone 12 Pro Unlocked	',
          product_id: 4,
        },
        {
          src: 'https://m.media-amazon.com/images/I/619m8rLBQSL.jpg',
          alt: 'Iphone 13 pro max',
          product_id: 5,
        },
        {
          src: 'https://m.media-amazon.com/images/I/71H8ipbuxoL.jpg',
          alt: 'Iphone 13 plus',
          product_id: 6,
        },
        {
          src: 'https://m.media-amazon.com/images/I/41XjE57VLvL.jpg',
          alt: 'AirPods v2',
          product_id: 7,
        },
        {
          src: 'https://m.media-amazon.com/images/I/61JDx5kZX8L.jpg',
          alt: 'AirPods Pro',
          product_id: 8,
        },
        {
          src: 'https://m.media-amazon.com/images/I/61CjYtVb7cL._AC_UF350,350_QL80_.jpg',
          alt: 'Ipad Air',
          product_id: 9,
        },
        {
          src: 'https://m.media-amazon.com/images/I/71HtN4qqLZL.jpg',
          alt: 'Galaxy s23 Ultra',
          product_id: 10,
        },
        {
          src: 'https://m.media-amazon.com/images/I/21gHzAPS6pL.jpg',
          alt: 'Apple EarPods',
          product_id: 11,
        },
        {
          src: 'https://m.media-amazon.com/images/I/51n1wPtHEAL._AC_UY695_.jpg',
          alt: 'Nike shoes',
          product_id: 12,
        },
        {
          src: 'https://m.media-amazon.com/images/I/51VFudBz0oL._AC_UY535_.jpg',
          alt: 'Nike shoes',
          product_id: 12,
        },
        {
          src: 'https://m.media-amazon.com/images/I/61c0zuVp+DL._AC_UY625_.jpg',
          alt: 'Nike shoes',
          product_id: 13,
        },
        {
          src: 'https://m.media-amazon.com/images/I/61wSNmBoxDL._AC_UY625_.jpg',
          alt: 'Nike shoes',
          product_id: 13,
        },
        {
          src: 'https://m.media-amazon.com/images/I/41-VIUhscIL._AC_SX679_.jpg',
          alt: 'Samsung Type-C cable',
          product_id: 14,
        },
        {
          src: 'https://m.media-amazon.com/images/I/51F36GDgoaL._AC_UY1000_.jpg',
          alt: 'Zara T-Shirt',
          product_id: 15,
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
