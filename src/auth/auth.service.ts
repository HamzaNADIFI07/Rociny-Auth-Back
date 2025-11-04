import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(
    private users: UsersService,
    private jwt: JwtService,
    private config: ConfigService,
  ) {}

  async login(email: string, password: string) {
    const user = await this.users.findByEmail(email);
    if (!user) throw new UnauthorizedException('Identifiant invalide');

    const ok = await this.users.validatePassword(user, password);
    if (!ok) throw new UnauthorizedException('Identifiant invalide');

    const payload = { sub: user.id, email: user.email };
    const expiresIn: number = this.config.get<number>('JWT_EXPIRES_IN') ?? 3600;

    const accessToken = await this.jwt.signAsync(payload, {
      expiresIn,
    });

    return {
      accessToken,
      user: { id: user.id, email: user.email, name: user.name },
    };
  }
}
