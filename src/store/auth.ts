import { create } from 'zustand';
import { AuthType } from 'src/types/auth';

type Store = {
  isAuthorized: AuthType;
  setAuthStatus: (payload: AuthType) => void;
};
const useAuthStore = create<Store>((set) => ({
  isAuthorized: false,
  setAuthStatus: (payload: AuthType) => set(() => ({ isAuthorized: payload })),
}));

export default useAuthStore;
