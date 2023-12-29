import { axios } from 'src/services';
import { LoginTypes } from './types';

export const logIn = async ({ email }: LoginTypes) => {
  const response = await axios.post('/login', { email });
  return response;
};
