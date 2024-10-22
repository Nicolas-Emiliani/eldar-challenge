import { Injectable } from '@angular/core';
import { MockUser, UserCredentials } from '../models/auth.interface';
import * as mockData from '@assets/mocks/data.json';

const adminAccount: MockUser = mockData.admin_account[0] as unknown as MockUser;
const userAccount: MockUser = mockData.user_account[0] as unknown as MockUser;

@Injectable({
  providedIn: 'root',
})
export class AuthService {
private tokenKey = 'auth_token';

  private readonly mockUser: MockUser[] = [
    {
      username: adminAccount.username,
      password: adminAccount.password,
      token: adminAccount.token,
    },
    {
      username: userAccount.username,
      password: userAccount.password,
      token: userAccount.token,
    },
  ];

  login(credentials: UserCredentials): boolean {
    const user = this.mockUser.find(
      (user) =>
        user.username === credentials.username &&
        user.password === credentials.password
    );
    if (user) {
      console.log('User found: ', user);
      console.log('Role Decoded: ', this.getDecodedToken());
      console.log('UserRole: ', this.getUserRole());

      localStorage.setItem(this.tokenKey, user.token);
      return true;
    }
    return false;
  }
  // login(usuario: string, password: string) {
  //   return this.http.post<any>(`${this.baseUrl}/auth/login`, { usuario, password });

  // }

  // Simular logout
  logout(): void {
    localStorage.removeItem(this.tokenKey);
  }

  // Verificar si el usuario está autenticado
  isAuthenticated(): boolean {
    const token = localStorage.getItem(this.tokenKey) || null;
    return Boolean(token);
  }

  // Obtener el token
  getToken(): string | null {
    try {
      const token = localStorage.getItem(this.tokenKey);
      return token ? token : null;
    } catch (error) {
      console.error('Error Token not found:', error);
      return null;
    }
  }

  // Decodificar el token JWT
  getDecodedToken(): { role: string } | null {
    const token = this.getToken();
    if (!token) {
      console.warn('No token found');
      return null;
    }

    // Simulate decoding the token (for testing purposes)
    switch (token) {
      case adminAccount.token:
        return { role: 'admin' };
      case userAccount.token:
        return { role: 'user' };
      default:
        console.warn('Invalid token');
        return null;
    }
  }

  // Obtener el rol del usuario
  getUserRole(): string {
    const decodedToken = this.getDecodedToken();
    return decodedToken ? decodedToken.role : '';
  }
}
