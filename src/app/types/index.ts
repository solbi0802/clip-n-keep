export interface MetaData {
  title: string;
  image: string;
  error?: string;
  description?: string;
  url?: string;
}

export interface User {
  id: string;
  email: string;
  [key: string]: unknown;
}

export interface AuthState {
  user: User | null;
  setUser: (user: User) => void;
  logout: () => void;
}
