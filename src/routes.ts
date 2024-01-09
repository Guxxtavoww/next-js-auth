/**
 * Uma matriz de rotas acessíveis ao público
 * Essas rotas não exigem autenticação
 */
export const publicRoutes = ['/', '/auth/new-verification'] as const;

/**
 * Uma matriz de rotas usadas para autenticação
 * Essas rotas redirecionarão usuários autenticados para /settings
 */
export const authRoutes = [
  '/auth/login',
  '/auth/register',
  '/auth/error',
  '/auth/reset',
  '/auth/new-password',
] as const;

/**
 * O prefixo para rotas de autenticação da API
 * Rotas que começam com esse prefixo são usadas para fins de autenticação da API
 */
export const apiAuthPrefix = '/api/auth';

/**
 * O caminho de redirecionamento padrão após o login
 */
export const DEFAULT_LOGIN_REDIRECT = '/settings';
