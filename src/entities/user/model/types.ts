export type UserRole = 'CUSTOMER' | 'MANAGER' | 'ADMIN';

export interface UserLoginRequestDto {
    email: string;
    password: string;
}

export interface authResponseDto {
    accessToken: string;
    refreshToken: string;
}

export interface User {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  role: UserRole;
}