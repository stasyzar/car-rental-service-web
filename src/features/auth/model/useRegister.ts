import { useMutation } from '@tanstack/react-query';
import { apiClient } from '@/shared/api/apiClient';
import { API_ROUTES } from '@/shared/api/api';
import type { User, UserRegistrationRequestDto } from '@/entities/user/model/types';

export const useRegister = () => {
  return useMutation({
    mutationFn: async (data: UserRegistrationRequestDto) => {
      const response = await apiClient.post<User>(API_ROUTES.AUTH.REGISTER, data);
      return response.data;
    },
  });
};
