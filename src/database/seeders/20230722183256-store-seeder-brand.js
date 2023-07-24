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
        {
          name: 'Samsung',
          description: 'Samsung is a leading tech company.',
          img: 'https://images.samsung.com/is/image/samsung/assets/global/about-us/brand/logo/300_186_3.png?$568_N_PNG$',
        },
        {
          name: 'Huawei',
          description: 'Huawei is a leading tech company.',
          img: 'https://www-file.huawei.com/-/media/corp/home/image/logo_400x200.png',
        },
        {
          name: 'Nike',
          description: 'Nike is a leading clothing company.',
          img: 'https://c.static-nike.com/a/images/w_1920,c_limit/bzl2wmsfh7kgdkufrrjq/image.jpg						',
        },
        {
          name: 'Adidas',
          description: 'Adidas is a leading clothing company.',
          img: 'https://static.vecteezy.com/system/resources/previews/010/994/276/original/adidas-logo-symbol-clothes-design-icon-abstract-football-illustration-free-vector.jpg',
        },
        {
          name: 'Zara',
          description: 'Zara is a leading clothing company.',
          img: 'https://static.dezeen.com/uploads/2019/02/new-zara-logo-col-2.jpg',
        },
      ],
      {}
    );
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('brands', null, {});
  },
};
