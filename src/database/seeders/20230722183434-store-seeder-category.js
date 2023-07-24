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
          description: 'Notebook computers and ultra books.',
          img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MJQK3?wid=532&hei=582&fmt=png-alpha&.v=1665496505001',
        },
        {
          name: 'Mobile accessories',
          description: 'All kind of Mobile accessories',
          img: 'https://cpimg.tistatic.com/06394744/b/4/Mobile-Accessories.jpg',
        },
        {
          name: 'Tablets',
          description: 'Tablets',
          img: 'https://hips.hearstapps.com/hmg-prod/images/pop-best-tablets-1597869444.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*',
        },
        {
          name: 'Shoes',
          description: 'Shoes for all',
          img: 'https://thumbs.dreamstime.com/b/new-fitness-sneakers-set-fashion-shoes-training-running-shoe-sport-shoes-set-vector-fitness-sneakers-shoes-training-149190804.jpg',
        },
        {
          name: 'T-shirts',
          description: 'best T-shirts in the market',
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdebsM12A2B_5f5YTwyZlvSrQYRupLi_dQSw&usqp=CAU',
        },
      ],
      {}
    );
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('categories', null, {});
  },
};
