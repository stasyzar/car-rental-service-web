export type UserRole = 'CUSTOMER' | 'MANAGER' | 'ADMIN';

export interface UserLoginRequestDto {
    email: string;
    password: string;
}

export interface AuthResponseDto {
    token: string;
    refreshToken: string;
}

export interface User {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  role: UserRole;
}