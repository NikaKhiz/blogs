import { create } from 'zustand';
import { UserTypes } from 'src/types/user';

type Store = {
  user: UserTypes;
  setUserEmail: (payload: UserTypes) => void;
};
const useUserStore = create<Store>((set) => ({
  user: { email: localStorage.getItem('email') || '' },
  setUserEmail: (payload: UserTypes) => {
    localStorage.setItem('email', payload.email);
    set(() => ({ user: payload }));
  },
}));

export default useUserStore;
