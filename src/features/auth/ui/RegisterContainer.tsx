import { useNavigate } from 'react-router-dom';
import { useRegister } from '../model/useRegister';
import { useLogin } from '../model/useLogin';
import { RegisterForm } from './RegisterForm';
import { useUserStore } from '@/entities/user/model/store';
import { useAuthModalStore } from '../model/authModalStore';
import { apiClient } from '@/shared/api/apiClient';
import { API_ROUTES } from '@/shared/api/api';
import type { UserRegistrationRequestDto, User } from '@/entities/user/model/types';

export const RegisterContainer = () => {
  const navigate = useNavigate();
  const { mutate: register, isPending: isRegistering, error: registerError } = useRegister();
  const { mutate: login, isPending: isLoggingIn } = useLogin();
  const setUser = useUserStore((state) => state.setUser);
  const closeModal = useAuthModalStore((state) => state.closeModal);

  const handleRegister = (data: UserRegistrationRequestDto) => {
    register(data, {
      onSuccess: () => {
        // Automatically login the user after successful registration
        login(
          { email: data.email, password: data.password },
          {
            onSuccess: async () => {
              try {
                const response = await apiClient.get<User>(API_ROUTES.USERS.ME);
                const user = response.data;
                setUser(user);
                closeModal();
                navigate('/');
              } catch (err) {
                console.error("Failed to load user profile after registration login", err);
              }
            },
          }
        );
      },
    });
  };

  const isLoading = isRegistering || isLoggingIn;

  return (
    <RegisterForm
      onSubmit={handleRegister}
      isLoading={isLoading}
      serverError={registerError?.message}
    />
  );
};

export default RegisterContainer;
