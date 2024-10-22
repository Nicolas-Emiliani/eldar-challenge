export type UserCredentials = {
  username: string;
  password: string;
};

export type MockUser = {
  username: string;
  email?: string;
  password: string;
  token: string;
  key?: string;
  role?: string;
};