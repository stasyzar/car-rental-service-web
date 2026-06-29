export const API_ROUTES = {
  AUTH: {
    LOGIN: '/auth/login',
    REFRESH: '/auth/refresh',
    REGISTER: '/auth/register',
  },
  USERS: {
    ME: '/users/me',
    UPDATE_ROLE: (id: number) => `/users/${id}/role`,
  },
  CARS: {
    BASE: '/cars',
    BY_ID: (id: number) => `/cars/${id}`,
    DETAILS: (id: number) => `/cars/${id}/details`,
    IMAGES: (id: number) => `/cars/${id}/images`,
    MAIN_IMAGE: (id: number) => `/cars/${id}/images/main`,
  },
  LOCATIONS: {
    BASE: '/locations',
    BY_ID: (id: number) => `/locations/${id}`,
    UPDATE: (id: number) => `/locations/${id}/update`,
  },
  RENTALS: {
    BASE: '/rentals',
    BY_ID: (id: number) => `/rentals/${id}`,
    UPDATE: (id: number) => `/rentals/${id}/update`,
    MY: '/rentals/my',
    MY_BY_ID: (id: number) => `/rentals/my/${id}`,
    RETURN: (id: number) => `/rentals/${id}/return`,
    ACTIVE: '/rentals/active',
  },
  PAYMENTS: {
    BASE: '/payments',
    SUCCESS: '/payments/success',
    CANCEL: '/payments/cancel',
    FINE: (rentalId: number) => `/payments/rentals/${rentalId}/fine`,
  },
} as const;