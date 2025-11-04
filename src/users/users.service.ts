import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  // On va simuler une base de données dans la mémoire RAM
  private users: User[] = [];

  constructor() {
    // On simule un user de test
    const password = 'mdp123';
    const hash = bcrypt.hashSync(password, 10);
    // Boucle pour créer 10 utilisateurs
    for (let i = 1; i <= 10; i++) {
      this.users.push({
        id: i,
        email: `user${i}@rociny.com`,
        passwordHash: hash,
        name: `User ${i}`,
      });
    }
  }
  // Comme notre fonction déclaré asynchrone mais n'utilise pas de await dans le corps de la fonction, j'ai igonrer la règle ESLint
  // et garder la mention async pour une future intégration d'une base de données et qui nécessitera que la fonction soit asynchrone
  // eslint-disable-next-line @typescript-eslint/require-await
  async findByEmail(email: string): Promise<User | undefined> {
    return this.users.find((u) => u.email === email);
  }

  async validatePassword(user: User, plain: string): Promise<boolean> {
    return bcrypt.compare(plain, user.passwordHash);
  }
}
