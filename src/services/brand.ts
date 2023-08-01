import { Brand } from '@/models/Brand';
import { setAttributes } from 'sequelize-typescript';

export async function getAllBrands() {
  try {
    return await Brand.findAll();
  } catch (e) {
    return e;
  }
}

export async function getBrandName(id: string) {
  try {
    return await Brand.findByPk(id, { attributes: ['name'] });
  } catch (e) {
    return e;
  }
}
