import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'; // 1. Імпортуємо інструменти для роботи з запитами
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'; // 2. Імпортуємо інструмент для дебагу (щоб "підглядати" в кеш)
import './index.css';
import App from './App.tsx';

// 3. Створюємо новий клієнт. Це наш "головний штаб" для управління даними з сервера.
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // Відключаємо автоматичний рефетч при перемиканні вкладки, щоб не дратувати юзера
      retry: 1, // Якщо запит впав, спробуй повторити лише 1 раз
    },
  },
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* 4. Огортаємо App провайдером і передаємо йому наш клієнт */}
    <QueryClientProvider client={queryClient}>
      <App />
      
      {/* 5. Додаємо Devtools. Вони будуть відображатися маленьким логотипом у кутку екрану. */}
      {/* Клік по ньому покаже тобі все, що відбувається з даними в реальному часі. */}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </StrictMode>,
);