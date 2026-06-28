import React, { useState } from 'react';
import type { UserLoginRequestDto } from '@/entities/user/model/types';
import { AlertCircle } from 'lucide-react';

interface LoginFormProps {
  onSubmit: (data: UserLoginRequestDto) => void;
  isLoading: boolean;
  serverError?: string;
}

export const LoginForm: React.FC<LoginFormProps> = ({ onSubmit, isLoading, serverError }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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
    <form onSubmit={handleSubmit} className="space-y-5 text-left">
      {/* Errors display */}
      {(serverError || validationError) && (
        <div className="p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg text-xs flex items-center gap-2 font-medium">
          <AlertCircle size={14} className="shrink-0 text-red-500" />
          <span>{validationError || serverError}</span>
        </div>
      )}

      {/* Email Input */}
      <div className="space-y-1.5">
        <label 
          htmlFor="email" 
          className="block text-xs font-bold text-slate-500 uppercase tracking-wider"
        >
          Email Address
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email@example.com"
          className="w-full px-3.5 py-2.5 text-sm border border-slate-200 rounded-lg bg-slate-50 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-slate-900 font-sans"
        />
      </div>

      {/* Password Input */}
      <div className="space-y-1.5">
        <label 
          htmlFor="password" 
          className="block text-xs font-bold text-slate-500 uppercase tracking-wider"
        >
          Password
        </label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="••••••••"
          className="w-full px-3.5 py-2.5 text-sm border border-slate-200 rounded-lg bg-slate-50 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-slate-900 font-sans"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isLoading}
        className="w-full py-3 px-4 border border-transparent rounded-lg text-xs font-bold uppercase tracking-wider text-white bg-indigo-600 hover:bg-indigo-700 transition-all disabled:opacity-50 shadow-sm cursor-pointer"
        style={{ fontFamily: 'var(--font-display)' }}
      >
        {isLoading ? 'Signing In...' : 'Sign In'}
      </button>
    </form>
  );
};

export default LoginForm;