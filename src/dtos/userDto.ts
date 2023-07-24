import {
  IsString,
  IsNotEmpty,
  MinLength,
  IsEmail,
  Length,
  IsAlphanumeric,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @Length(2, 50, { message: 'First name must be between 3 and 50 characters' })
  firstName: string;

  @IsString()
  @Length(2, 50, { message: 'First name must be between 3 and 50 characters' })
  lastName: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(8, { message: 'Password must be between at least 8' })
  @IsAlphanumeric()
  password: string;
}

export class LoginUserDto {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;
}
