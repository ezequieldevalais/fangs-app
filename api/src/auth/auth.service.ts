import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as argon from 'argon2';
import { User } from 'src/modules/user/entities/user.entity';
import { Repository } from 'typeorm';
@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async validateUser(username: string, password: string) {
    /*const users: any[] = [
      {
        username: 'admin@admin.com',
        password: await argon.hash('admin'),
        id: '1',
      },
      {
        username: 'username',
        password: await argon.hash('password'),
        id: '2',
      },
    ];*/
    const user = await this.userRepository.findOne({
      where: { email: username },
    });

    if (user === null) return null;

    const pwValid = await argon.verify(user.password, password);

    if (!pwValid) return null;

    return user;
  }

  async encodePassword(password: string): Promise<string> {
    return await argon.hash(password, {});
  }
}
