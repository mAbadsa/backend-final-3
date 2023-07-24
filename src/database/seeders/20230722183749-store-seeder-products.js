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

    const samsungBrandId = await queryInterface.rawSelect(
      'brands',
      {
        where: { name: 'Samsung' },
        plain: true,
        attributes: ['id'],
        type: Sequelize.QueryTypes.SELECT,
      },
      ['id']
    );
    const adidasBrandId = await queryInterface.rawSelect(
      'brands',
      {
        where: { name: 'Adidas' },
        plain: true,
        attributes: ['id'],
        type: Sequelize.QueryTypes.SELECT,
      },
      ['id']
    );
    const nikeBrandId = await queryInterface.rawSelect(
      'brands',
      {
        where: { name: 'Nike' },
        plain: true,
        attributes: ['id'],
        type: Sequelize.QueryTypes.SELECT,
      },
      ['id']
    );
    const zaraBrandId = await queryInterface.rawSelect(
      'brands',
      {
        where: { name: 'Zara' },
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
    const mobileAccessoriesCategoryId = await queryInterface.rawSelect(
      'categories',
      {
        where: { name: 'Mobile accessories' },
        plain: true,
        attributes: ['id'],
        type: Sequelize.QueryTypes.SELECT,
      },
      ['id']
    );
    const tabletsCategoryId = await queryInterface.rawSelect(
      'categories',
      {
        where: { name: 'Tablets' },
        plain: true,
        attributes: ['id'],
        type: Sequelize.QueryTypes.SELECT,
      },
      ['id']
    );
    const shoesCategoryId = await queryInterface.rawSelect(
      'categories',
      {
        where: { name: 'Shoes' },
        plain: true,
        attributes: ['id'],
        type: Sequelize.QueryTypes.SELECT,
      },
      ['id']
    );
    const shirtCategoryId = await queryInterface.rawSelect(
      'categories',
      {
        where: { name: 'T-shirts' },
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
        },
        {
          title: 'Iphone 12',
          sub_title: 'Iphone 12 Pro Unlocked	',
          description:
            'Fully unlocked and compatible with any carrier of choice (e.g. AT&T, T-Mobile, Sprint, Verizon, US-Cellular, Cricket, Metro, etc.).',
          price: 599.99,
          quantity: 10,
          rating: 4.5,
          discount: 3,
          brand_id: appleBrandId,
          category_id: phoneCategoryId,
        },
        {
          //
          title: 'Iphone 13 pro max',
          sub_title: 'Iphone 13 Pro Max',
          description:
            'Fully unlocked and compatible with any carrier of choice (e.g. AT&T, T-Mobile, Sprint, Verizon, US-Cellular, Cricket, Metro, etc.).',
          price: 799,
          quantity: 5,
          rating: 4.7,
          discount: 0,
          brand_id: appleBrandId,
          category_id: phoneCategoryId,
        },
        {
          title: 'Iphone 13 plus',
          sub_title: 'Iphone 13 plus',
          description:
            'Fully unlocked and compatible with any carrier of choice (e.g. AT&T, T-Mobile, Sprint, Verizon, US-Cellular, Cricket, Metro, etc.).',
          price: 599,
          quantity: 12,
          rating: 4.1,
          discount: 0,
          brand_id: appleBrandId,
          category_id: phoneCategoryId,
        },
        {
          title: 'AirPods v2',
          sub_title: 'Apple airpods',
          description:
            'Personalized Spatial Audio with dynamic head tracking places sound all around you Single fit Force sensor lets you control your entertainment and answer or end calls Sweat and water resistant for AirPods and charging case',
          price: 150,
          quantity: 50,
          rating: 3.5,
          discount: 0,
          brand_id: appleBrandId,
          category_id: mobileAccessoriesCategoryId,
        },
        {
          title: 'AirPods Pro',
          sub_title: 'Apple airpods',
          description:
            'Personalized Spatial Audio with dynamic head tracking places sound all around you Single fit Force sensor lets you control your entertainment and answer or end calls Sweat and water resistant for AirPods and charging case',
          price: 250,
          quantity: 50,
          rating: 4.5,
          discount: 3,
          brand_id: appleBrandId,
          category_id: mobileAccessoriesCategoryId,
        },
        {
          title: 'Ipad Air',
          sub_title: 'Apple ipad 2022',
          description: 'A high-performance Tablet for professionals.',
          price: 700,
          quantity: 12,
          rating: 4.2,
          discount: 0,
          brand_id: appleBrandId,
          category_id: tabletsCategoryId,
        },
        {
          //
          title: 'Galaxy s23 Ultra',
          sub_title: 'Samsung Galaxy s23 Ultra',
          description:
            '6.8-inch Dynamic AMOLED display with 120Hz refresh rate, Snapdragon 8 Gen 2 processor, 5000mAh battery, up to 12gigs of RAM, and 1TB of storage.',
          price: 1200,
          quantity: 12,
          rating: 4.9,
          discount: 0,
          brand_id: samsungBrandId,
          category_id: phoneCategoryId,
        },
        {
          title: 'Apple EarPods',
          sub_title: 'apple wired headphones',
          description:
            'Compatible with all lightning connector devices, Headphone are widely compatible with iPhone 13/13 Pro/13 Pro Max/13 Mini/12 Mini/12 Pro Max/SE/11 Pro Max/11 Pro/XS Max/X/XR/8/8 Plus/7 Plus/7. Designed specifically for mobile phones, with built-in decoding chip, perfectly compatible with all IOS systems.',
          price: 40,
          quantity: 12,
          rating: 4.5,
          discount: 30,
          brand_id: appleBrandId,
          category_id: mobileAccessoriesCategoryId,
        },
        {
          title: 'Nike Men Shoes',
          sub_title: 'Nike Men Gymnastics Shoes',
          description:
            'synthetic-and-rubber | Leather sole | Nike | Mens Shoes | Black/White | Athletic Shoe | Synthetic & Rubber',
          price: 59,
          quantity: 20,
          rating: 4.3,
          discount: 0,
          brand_id: nikeBrandId,
          category_id: shoesCategoryId,
        },
        {
          title: 'Nike Mens Track & Field Shoes',
          sub_title: 'Track & Field Shoes',
          description:
            'Sport | Leather sole | Nike | Mens Shoes | Black/White | Athletic Shoe | Synthetic & Rubber',
          price: 44.5,
          quantity: 9,
          rating: 4.6,
          discount: 0,
          brand_id: nikeBrandId,
          category_id: shoesCategoryId,
        },
        {
          title: 'Samsung Type-C',
          sub_title: 'Samsung Type-C to Type-C 1.8m Cable (3A), Black',
          description:
            'Type-C to Type-C 1.8m Cable (3A) | Samsung Type-C to Type-C 1.8m Cable (3A), Black | Package Dimensions: 2.794 L x 10.922 H x 5.334 W (centimeters) | Item Package Weight: 0.014925295149916211 pounds',
          price: 19.9,
          quantity: 12,
          rating: 4.8,
          discount: 50,
          brand_id: samsungBrandId,
          category_id: mobileAccessoriesCategoryId,
        },
        {
          title: 'Zara T-Shirt',
          sub_title: 'Brah mens T-Shirt, Black',
          description:
            'Solid colors: 100% Cotton; Heather Grey: 90% Cotton, 10% Polyester; All Other Heathers: 50% Cotton, 50% Polyester',
          price: 19.9,
          quantity: 12,
          rating: 4.8,
          discount: 25,
          brand_id: zaraBrandId,
          category_id: shirtCategoryId,
        },
      ],
      {}
    );
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('products', null, {});
  },
};
