import { CartItem } from '@models/CartItem';
import { User } from '@models/User';

interface IUser {
  firstName: number;
  lastName: number;
  email: number;
  password: number;
}

export const getUserById = async (userId: number): Promise<User> => {
  return await User.findByPk(userId);
};

export const getUserByEmail = async (email: string): Promise<User> => {
  return await User.findOne({ where: { email } });
};

export const createNewUser = async ({
  firstName,
  lastName,
  email,
  password,
}: IUser): Promise<User> => {
  const user = await User.create({
    firstName,
    lastName,
    email,
    password,
  });
  const newUser = await user.save();
  return newUser;
};

export const updateUserCurrentCart = async (
  userId: number,
  cartId: number
): Promise<number[]> => {
  return await User.update(
    { currentCartId: cartId },
    { where: { id: userId } }
  );
};

export const removeUserById = async (userId: number): Promise<number> => {
  return await User.destroy({ where: { id: userId } });
};
