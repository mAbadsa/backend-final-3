const { Op } = require('sequelize');
import { Category } from '@/models/Category';
import { Product } from '@/models/Product';
import { ParsedQs } from 'qs';

export async function getCategories() {
  try {
    return await Category.findAll();
  } catch (e) {
    return e;
  }
}

export async function getCategoryName(id: string) {
  try {
    return await Category.findByPk(id, { attributes: ['name'] });
  } catch (e) {
    return e;
  }
}
