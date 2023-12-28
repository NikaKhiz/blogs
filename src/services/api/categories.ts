import { axios } from 'src/services';

export const getCategories = async () => {
  const response = await axios.get('/categories');
  return response;
};
