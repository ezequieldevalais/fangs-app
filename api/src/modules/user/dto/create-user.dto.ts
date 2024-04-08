import {
  IsAlphanumeric,
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsString,
  MinLength,
} from 'class-validator';
import { Role } from '../../../auth/enums';

export class CreateUserDto {
  @IsString()
  @MinLength(2, { message: 'Name must have atleast 2 characters.' })
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @MinLength(3, { message: 'Username must have atleast 3 characters.' })
  @IsAlphanumeric('en-US', {
    message: 'Username does not allow other than alpha numeric chars.',
  })
  username: string;

  @IsNotEmpty()
  @IsEmail({}, { message: 'Please provide valid Email.' })
  email: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(5, { message: 'password must have atleast 5 characters.' })
  password: string;

  @IsNotEmpty()
  @IsEnum(Role)
  role: Role;
}
