export const API_ROUTES = {
  AUTH: {
    LOGIN: '/auth/login',
    REFRESH: '/auth/refresh',
    REGISTER: '/auth/register',
  },
  CARS: {
    BASE: '/cars',
    DETAILS: (id: number) => `/cars/${id}`,
  },
} as const;