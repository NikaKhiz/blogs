import { create } from 'zustand';
import { AuthType } from 'src/types/auth';

type Store = {
  isAuthorized: AuthType;
  setAuthStatus: (payload: AuthType) => void;
};
const useAuthStore = create<Store>((set) => ({
  isAuthorized: Boolean(localStorage.getItem('authorized')) || false,
  setAuthStatus: (payload: AuthType) => {
    localStorage.setItem('authorized', JSON.stringify(true));
    set(() => ({ isAuthorized: payload }));
  },
}));

export default useAuthStore;
