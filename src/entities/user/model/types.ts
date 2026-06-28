export interface AuthResponseDto {
  token: string;
  refreshToken: string;
}

export interface RefreshTokenDto {
  refreshToken: string;
}

export interface UserLoginRequestDto {
  email: string;
  password: string;
}

export interface UserRegistrationRequestDto {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  confirmPassword: string;
}

