import { create } from 'zustand';

interface AuthModalState {
  isOpen: boolean;
  defaultTab: 'login' | 'register';
  openModal: (tab?: 'login' | 'register') => void;
  closeModal: () => void;
}

export const useAuthModalStore = create<AuthModalState>((set) => ({
  isOpen: false,
  defaultTab: 'login',
  openModal: (tab = 'login') => set({ isOpen: true, defaultTab: tab }),
  closeModal: () => set({ isOpen: false }),
}));