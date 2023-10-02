import { Either, left, right } from '@/core/either';
import { User } from '../../enterprise/entities/user';
import { UsersRepository } from '../repositories/users-repository';
import { UserAlreadyExistsError } from './errors/user-already-exists-error';
import { hash } from 'bcryptjs';

interface RegisterUseCaseRequest {
  name: string;
  email: string;
  password: string;
}

type RegisterUseCaseResponse = Either<
  UserAlreadyExistsError,
  {
    user: User;
  }
>;

export class RegisterUseCase {
  constructor(private usersRepository: UsersRepository) {}

  async execute({
    name,
    email,
    password,
  }: RegisterUseCaseRequest): Promise<RegisterUseCaseResponse> {
    const password_hash = await hash(password, 9);

    const userWithSameEmail = await this.usersRepository.findByEmail(email);

    if (userWithSameEmail) {
      return left(new UserAlreadyExistsError(email));
    }

    const user = User.create({
      name,
      email,
      password_hash,
    });

    await this.usersRepository.create(user);

    return right({
      user,
    });
  }
}
