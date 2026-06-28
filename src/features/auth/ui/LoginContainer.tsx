
import type { UserLoginRequestDto } from "@/entities/user/model/types";
import { useLogin } from "../model/useLogin";
import { LoginForm } from './LoginForm';
import { useNavigate } from 'react-router-dom';

export const LoginContainer = () =>  {
    const navigate = useNavigate();
    const {mutate: login, isPending, error} = useLogin();
    const handleLogin = (data: UserLoginRequestDto) => {
    login(data, {
      onSuccess: () => {
        navigate('/');
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