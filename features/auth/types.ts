export interface SignInPayload {
  email: string;
  password?: string;
}

export interface SignUpPayload {
  name: string;
  email: string;
  password?: string;
}

export interface AuthUser {
  id: string;
  email: string;
  name: string;
}

export interface AuthTokens {
  accessToken: string;
  refreshToken: string;
}

export interface AuthResponse {
  user: AuthUser;
  tokens: AuthTokens;
}
