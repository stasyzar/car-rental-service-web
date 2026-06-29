import React, { useState } from 'react';
import type { UserLoginRequestDto } from '@/entities/user/model/types';
import { AlertCircle, Mail, Lock, Eye, EyeOff } from 'lucide-react';

interface LoginFormProps {
  onSubmit: (data: UserLoginRequestDto) => void;
  isLoading: boolean;
  serverError?: string;
}

export const LoginForm: React.FC<LoginFormProps> = ({ onSubmit, isLoading, serverError }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [validationError, setValidationError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError(null);

    if (!email || !password) {
      setValidationError('Please fill in all fields.');
      return;
    }

    onSubmit({ email, password });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 text-left font-sans">
      {/* Errors display */}
      {(serverError || validationError) && (
        <div className="p-3.5 bg-red-50 border border-red-200 text-red-700 rounded-xl text-xs flex items-center gap-2 font-medium">
          <AlertCircle size={15} className="shrink-0 text-red-500" />
          <span>{validationError || serverError}</span>
        </div>
      )}

      {/* Email Input */}
      <div className="space-y-1">
        <label 
          htmlFor="email" 
          className="block text-xs font-bold text-slate-500 uppercase tracking-wider"
        >
          Email Address
        </label>
        <div className="relative">
          <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email@example.com"
            className="w-full pl-10 pr-3.5 py-2.5 text-sm border border-slate-200 rounded-xl bg-slate-50 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-slate-900"
          />
        </div>
      </div>

      {/* Password Input */}
      <div className="space-y-1">
        <label 
          htmlFor="password" 
          className="block text-xs font-bold text-slate-500 uppercase tracking-wider"
        >
          Password
        </label>
        <div className="relative">
          <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
          <input
            id="password"
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            className="w-full pl-10 pr-10 py-2.5 text-sm border border-slate-200 rounded-xl bg-slate-50 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-slate-900"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 focus:outline-none"
          >
            {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
          </button>
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isLoading}
        className="w-full py-3 px-4 border border-transparent rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-indigo-600 hover:bg-indigo-700 transition-all disabled:opacity-50 shadow-sm cursor-pointer mt-2"
        style={{ fontFamily: 'var(--font-display)' }}
      >
        {isLoading ? 'Signing In...' : 'Sign In'}
      </button>
    </form>
  );
};

export default LoginForm;