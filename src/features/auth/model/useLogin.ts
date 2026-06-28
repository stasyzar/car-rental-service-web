import { useMutation } from '@tanstack/react-query';
import { apiClient } from '@/shared/api/apiClient';
import type { AuthResponseDto } from '@/entities/user/model/types';
import { API_ROUTES } from '@/shared/api/api';
import type { UserLoginRequestDto } from '@/entities/user/model/types';

export const useLogin = () => {
  return useMutation({
    mutationFn: async (data: UserLoginRequestDto) => {
      const response = await apiClient.post<AuthResponseDto>(API_ROUTES.AUTH.LOGIN, data);
      return response.data;
    },
    onSuccess: (data) => {
      localStorage.setItem('token', data.token);
      localStorage.setItem('refreshToken', data.refreshToken);
    },
  });
};