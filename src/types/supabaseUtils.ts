export interface AuthProps {
  email: string;
  password: string;
  username?: string;
}

export interface ApiAuthError {
  error: boolean;
  message: string;
}
