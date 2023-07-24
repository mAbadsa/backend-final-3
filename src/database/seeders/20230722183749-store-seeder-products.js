/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const appleBrandId = await queryInterface.rawSelect(
      'brands',
      {
        where: { name: 'Apple' },
        plain: true,
        attributes: ['id'],
        type: Sequelize.QueryTypes.SELECT,
      },
      ['id']
    );

    const phoneCategoryId = await queryInterface.rawSelect(
      'categories',
      {
        where: { name: 'Phones' },
        plain: true,
        attributes: ['id'],
        type: Sequelize.QueryTypes.SELECT,
      },
      ['id']
    );

    const laptopCategoryId = await queryInterface.rawSelect(
      'categories',
      {
        where: { name: 'Laptops' },
        plain: true,
        attributes: ['id'],
        type: Sequelize.QueryTypes.SELECT,
      },
      ['id']
    );

    await queryInterface.bulkInsert(
      'products',
      [
        {
          title: 'iPhone 13 Pro',
          sub_title: 'iPhone 13 Pro',
          price: 999.99,
          description: 'The latest flagship iPhone with advanced features.',
          quantity: 10,
          rating: 4.7,
          discount: 2,
          brand_id: appleBrandId,
          category_id: phoneCategoryId,
          // img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-model-unselect-gallery-2-202207_GEO_US?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1654893618197', // Add the image filename or URL here
        },
        {
          title: 'iPhone 13 Mini',
          sub_title: 'iPhone 13 Mini',
          price: 799.99,
          description: 'A compact iPhone with a powerful processor.',
          quantity: 10,
          rating: 4.7,
          discount: 2,
          brand_id: appleBrandId,
          category_id: phoneCategoryId,
          // img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MPPP3?wid=532&hei=582&fmt=png-alpha&.v=1662503140974', // Add the image filename or URL here
        },
        {
          title: 'MacBook Pro 16-inch',
          sub_title: 'MacBook Pro 16-inch',
          description: 'A high-performance laptop for professionals.',
          price: 1999.99,
          quantity: 12,
          rating: 4.5,
          discount: 7,
          brand_id: appleBrandId,
          category_id: laptopCategoryId,
          // img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MQDP3?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1664481446939', // Add the image filename or URL here
        },
      ],
      {}
    );
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('products', null, {});
  },
};
