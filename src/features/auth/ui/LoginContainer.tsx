import { useNavigate } from 'react-router-dom';
import { useLogin } from '../model/useLogin';
import { LoginForm } from './LoginForm';
import { useUserStore } from '@/entities/user/model/store';
import { apiClient } from '@/shared/api/apiClient';
import { API_ROUTES } from '@/shared/api/api';
import type { UserLoginRequestDto, User } from "@/entities/user/model/types";

export const LoginContainer = () => {
  const navigate = useNavigate();
  const { mutate: login, isPending, error } = useLogin();
  const setUser = useUserStore((state) => state.setUser);

  const handleLogin = (data: UserLoginRequestDto) => {
    login(data, {
      onSuccess: async () => {
        try {const response = await apiClient.get<User>(API_ROUTES.USERS.ME);
          const user = response.data;
          setUser(user);

          if (user.role === 'ADMIN' || user.role === 'MANAGER') {
            navigate('/admin');
          } else {
            navigate('/');
          }
        } catch (err) {
          console.error("Не вдалося завантажити профіль користувача", err);
          useUserStore.getState().logout();
        }
      },
    });
  };

  return (
    <LoginForm 
      onSubmit={handleLogin} 
      isLoading={isPending} 
      serverError={error?.message} 
    />
  );
};